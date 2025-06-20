package com.nexident.masterclass_admin.service;

import com.nexident.masterclass_admin.entity.Doctor;
import com.nexident.masterclass_admin.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    private final String uploadDir = "uploads/doctors/";

    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }

    public void saveDoctorWithImage(Doctor doctor, MultipartFile file) {
        try {
            Path folderPath = Paths.get(uploadDir);
            if (!Files.exists(folderPath)) {
                Files.createDirectories(folderPath);
            }

            // Create unique file name (e.g. abc123_image.jpg)
            String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
            Path filePath = folderPath.resolve(fileName);

            // Save image to disk
            Files.write(filePath, file.getBytes());

            // Save doctor info with image filename
            doctor.setImagePath(fileName);
            doctorRepository.save(doctor);

        } catch (IOException e) {
            throw new RuntimeException("Failed to save doctor or image", e);
        }
    }

    public String deleteDoctor(long id){
        doctorRepository.deleteById(id);
        return "Doctor has been deleted successfully";
    }
}

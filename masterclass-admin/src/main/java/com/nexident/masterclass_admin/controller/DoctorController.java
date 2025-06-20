package com.nexident.masterclass_admin.controller;

import com.nexident.masterclass_admin.entity.Doctor;
import com.nexident.masterclass_admin.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/doctor")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @PostMapping(value = "/create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> createDoctor(
            @ModelAttribute Doctor doctor,
            @RequestPart("file")MultipartFile file){

        doctorService.saveDoctorWithImage(doctor, file);
        return new ResponseEntity<>("Doctor created successfully", HttpStatus.OK);
    }

    @GetMapping("/image/{filename}")
    public ResponseEntity<byte[]> getImage(@PathVariable String filename) throws IOException {
        Path imagePath = Paths.get("uploads/doctors/" + filename);  // Added missing slash

        if(!Files.exists(imagePath))
            return ResponseEntity.notFound().build();
        byte[] imageBytes = Files.readAllBytes(imagePath);

        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(imageBytes);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Doctor>> listAllDoctors(){
        return new ResponseEntity<>(doctorService.getAllDoctors(), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteDoctor(@PathVariable long id){
        try{
            return new ResponseEntity<>(doctorService.deleteDoctor(id), HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage() + " with the id" + id, HttpStatus.NOT_ACCEPTABLE);
        }
    }
}

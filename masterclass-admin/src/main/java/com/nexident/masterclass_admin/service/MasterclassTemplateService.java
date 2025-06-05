package com.nexident.masterclass_admin.service;

import com.nexident.masterclass_admin.entity.MasterclassTemplate;
import com.nexident.masterclass_admin.repository.MasterclassTemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class MasterclassTemplateService {

    @Autowired
    private MasterclassTemplateRepository repository;

    private final String uploadDir = "uploads/masterclassTemplates/";

    public void saveWithImages(MasterclassTemplate template, List<MultipartFile> files) {
        List<String> imageFileNames = new ArrayList<>();

        try {
            Path dir = Paths.get(uploadDir);
            if (!Files.exists(dir)) {
                Files.createDirectories(dir);
            }

            for (MultipartFile file : files) {
                String uniqueName = UUID.randomUUID() + "_" + file.getOriginalFilename();
                Path filePath = dir.resolve(uniqueName);
                Files.write(filePath, file.getBytes());
                imageFileNames.add(uniqueName);
            }

            template.setImageUrls(imageFileNames);
            repository.save(template);
        } catch (IOException e) {
            throw new RuntimeException("Failed to save masterclass template or images", e);
        }
    }

    public byte[] getImageByName(String filename) throws IOException {
        Path path = Paths.get(uploadDir + filename);
        if (!Files.exists(path)) throw new IOException("Image not found");
        return Files.readAllBytes(path);
    }

    public MasterclassTemplate getById(long id){
        return repository.findById(id).
                orElseThrow(() -> new RuntimeException("Template not found"));
    }


    public List<MasterclassTemplate> getAllTemplates(){
        return repository.findAll();
    }
}
package com.nexident.masterclass_admin.controller;

import com.nexident.masterclass_admin.entity.MasterclassTemplate;
import com.nexident.masterclass_admin.repository.MasterclassTemplateRepository;
import com.nexident.masterclass_admin.service.MasterclassTemplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/masterclass/templates")
public class MasterclassTemplateController {
    @Autowired
    private MasterclassTemplateRepository repository;

    @Autowired
    private MasterclassTemplateService service;

    @PostMapping("/create")
    public ResponseEntity<?> create(
            @ModelAttribute MasterclassTemplate template,
            @RequestParam("files") List<MultipartFile> files) {

        try {
            // Detailed logging
//            System.out.println("=== Received Data ===");
//            System.out.println("Title: " + template.getTitle());
//            System.out.println("Lecturer ID: " + (template.getLecturer() != null ? template.getLecturer().getId() : "null"));
//            System.out.println("Files received: " + files.stream()
//                    .map(f -> f.getOriginalFilename() + " (" + f.getSize() + " bytes)")
//                    .collect(Collectors.joining(", ")));

            service.saveWithImages(template, files);
            return ResponseEntity.ok("MasterclassTemplate created successfully");

        } catch (Exception e) {
            System.err.println("Error creating template: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error: " + e.getMessage());
        }
    }

    @GetMapping("/image/{filename}")
    public ResponseEntity<byte[]> getImage(@PathVariable String filename) {
        try {
            byte[] data = service.getImageByName(filename);
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(data);
        } catch (IOException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<MasterclassTemplate>> listAllTemplates(){
        return new ResponseEntity<>(service.getAllTemplates(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable long id){
        try {
            return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
        }catch (RuntimeException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable long id){
        try{
            return new ResponseEntity<>(service.deleteTemplateById(id), HttpStatus.OK);
        }catch (RuntimeException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
        }
    }
}

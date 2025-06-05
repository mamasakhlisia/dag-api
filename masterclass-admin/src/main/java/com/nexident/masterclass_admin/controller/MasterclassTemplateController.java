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

@RestController
@RequestMapping("/api/masterclass/templates")
public class MasterclassTemplateController {
    @Autowired
    private MasterclassTemplateRepository repository;

    @Autowired
    private MasterclassTemplateService service;

    @PostMapping("/create")
    public ResponseEntity<String> create(
            @ModelAttribute MasterclassTemplate template,
            @RequestParam("files") List<MultipartFile> files) {

        service.saveWithImages(template, files);
        return ResponseEntity.ok("MasterclassTemplate created with images.");
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
}

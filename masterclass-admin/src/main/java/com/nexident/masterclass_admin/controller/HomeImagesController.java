package com.nexident.masterclass_admin.controller;

import com.nexident.masterclass_admin.entity.HomeImages;
import com.nexident.masterclass_admin.service.HomeImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/home-content/images")
public class HomeImagesController {
    @Autowired
    private HomeImagesService homeImagesService;

    @GetMapping
    public ResponseEntity<HomeImages> getImagePaths() throws IOException {
        return ResponseEntity.ok(homeImagesService.getImagePaths());
    }

    @PostMapping
    public ResponseEntity<HomeImages> updateImages(
            @RequestParam(value = "introImage", required = false) MultipartFile introImage,
            @RequestParam(value = "aboutImage", required = false) MultipartFile aboutImage) throws IOException {

        HomeImages current = homeImagesService.getImagePaths();

        if (introImage != null && !introImage.isEmpty()) {
            String introPath = homeImagesService.storeImage(introImage, "intro");
            current.setIntroImage(introPath);
        }

        if (aboutImage != null && !aboutImage.isEmpty()) {
            String aboutPath = homeImagesService.storeImage(aboutImage, "about");
            current.setAboutImage(aboutPath);
        }

        homeImagesService.updateImagePaths(current);
        return ResponseEntity.ok(current);
    }

    @GetMapping("/{imageType}")
    public ResponseEntity<Resource> getImage(@PathVariable String imageType) throws IOException {
        if (!imageType.equals("intro") && !imageType.equals("about")) {
            return ResponseEntity.badRequest().build();
        }
        Resource image = homeImagesService.loadImage(imageType);
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG) // or detect dynamically
                .body(image);
    }
}
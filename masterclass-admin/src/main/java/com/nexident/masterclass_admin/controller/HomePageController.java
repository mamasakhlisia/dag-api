package com.nexident.masterclass_admin.controller;

import com.nexident.masterclass_admin.entity.HomePage;
import com.nexident.masterclass_admin.service.HomeImagesService;
import com.nexident.masterclass_admin.service.HomePageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/home-content")
public class HomePageController {
    private final HomePageService homePageService;
    private final HomeImagesService homeImagesService;

    public HomePageController(HomePageService homePageService, HomeImagesService homeImagesService){
        this.homePageService = homePageService;
        this.homeImagesService = homeImagesService;
    }

    @GetMapping
    public ResponseEntity<HomePage> getContent(){

        return new ResponseEntity<>(homePageService.getContent() , HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Void> updateContent(@RequestBody HomePage content){
        homePageService.saveContent(content);
        return ResponseEntity.ok().build();
    }
}

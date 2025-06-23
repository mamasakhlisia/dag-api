package com.nexident.masterclass_admin.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexident.masterclass_admin.entity.HomeImages;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class HomeImagesService {
    @Value("${home.images.paths.file}")
    private String imagesPathFile;
    @Value("${home.images.directory}")
    private String imagesDirectory;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public HomeImages getImagePaths() throws IOException {
        Path filePath = Paths.get(imagesPathFile);
        if(Files.exists(filePath)){
            return objectMapper.readValue(filePath.toFile(), HomeImages.class);
        }
        return new HomeImages("", " ");
    }

    public void updateImagePaths(HomeImages homeImages) throws IOException{
        Path filePath = Paths.get(imagesPathFile);
        Files.createDirectories(filePath.getParent());
        objectMapper.writeValue(filePath.toFile(), homeImages);
    }

    public String storeImage(MultipartFile file, String imageType) throws IOException{
        if(!imageType.equals("intro") && !imageType.equals("about")){
            throw new IllegalArgumentException("Image type must be either intro or about");
        }

        Path uploadPath = Paths.get(imagesDirectory);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String extension = FilenameUtils.getExtension(file.getOriginalFilename());
        String filename = imageType + "-image." + (extension.isEmpty() ? "jpg" : extension);
        Path destination = uploadPath.resolve(filename);

        Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);

        return destination.toString();
    }

    public Resource loadImage(String imageType) throws IOException {
        // Get current paths to determine filename
        HomeImages images = getImagePaths();
        String path = imageType.equals("intro") ?
                images.getIntroImage() : images.getAboutImage();

        if (path == null || path.isEmpty()) {
            throw new IOException("Image path not configured");
        }

        Path imagePath = Paths.get(path);
        Resource resource = new UrlResource(imagePath.toUri());

        if (resource.exists() && resource.isReadable()) {
            return resource;
        }
        throw new IOException("Image not found: " + path);
    }
}

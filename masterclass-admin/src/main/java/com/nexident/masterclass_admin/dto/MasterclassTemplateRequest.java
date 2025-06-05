package com.nexident.masterclass_admin.dto;

import com.nexident.masterclass_admin.entity.Doctor;
import com.nexident.masterclass_admin.entity.MasterclassTemplate;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class MasterclassTemplateRequest{
    private String title;
    private Long lecturerId;
    private String shortDescription;
    private String fullDescription;
    private String price;
    private List<MultipartFile> files;

    public MasterclassTemplate toEntity() {
        MasterclassTemplate template = new MasterclassTemplate();
        template.setTitle(title);
        template.setShortDescription(shortDescription);
        template.setFullDescription(fullDescription);
        template.setPrice(price);

        Doctor lecturer = new Doctor();
        lecturer.setId(lecturerId);
        template.setLecturer(lecturer);

        return template;
    }
}

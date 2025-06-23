package com.nexident.masterclass_admin.entity;

import com.nexident.masterclass_admin.dto.HomeCard;
import jakarta.persistence.Entity;
import lombok.Data;

import java.util.List;

@Data
public class HomePage {
    private String navHeader;
    private String navParagraph;
    private List<String> about;
    private List<HomeCard> cards;
    private List<HomeCard> ratings;
    private String footerText;

    private String facebook;
    private String linkedIn;
    private String instagram;
}
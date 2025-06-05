package com.nexident.masterclass_admin.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
public class MasterclassTemplate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;

    @ManyToOne
    private Doctor lecturer;
    private String shortDescription;
    @Lob
    private String fullDescription;
    private String price;

    @ElementCollection
    private List<String> imageUrls;
}

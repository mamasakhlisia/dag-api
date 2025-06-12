package com.nexident.masterclass_admin.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Data
@Getter
@Setter
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

package com.nexident.masterclass_admin.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Masterclass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String slug;
    private LocalDateTime date;
    private int daysLong;
    @Column(nullable = false, columnDefinition = "boolean default false")
    private boolean definate;
    @Column(nullable = true, columnDefinition = "boolean default true")
    private boolean theoretical;
    private String signupLink;
    @ManyToOne
    @JoinColumn(name = "template_id", nullable = false)
    private MasterclassTemplate template;
}
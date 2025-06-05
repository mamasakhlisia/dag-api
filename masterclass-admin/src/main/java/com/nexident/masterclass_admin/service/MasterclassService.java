package com.nexident.masterclass_admin.service;

import com.nexident.masterclass_admin.entity.Masterclass;
import com.nexident.masterclass_admin.entity.MasterclassTemplate;
import com.nexident.masterclass_admin.repository.MasterclassRepository;
import com.nexident.masterclass_admin.repository.MasterclassTemplateRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MasterclassService {
    private final MasterclassRepository masterclassRepository;
    private final MasterclassTemplateRepository templateRepository;

    public MasterclassService(MasterclassRepository masterclassRepository, MasterclassTemplateRepository templateRepository) {
        this.masterclassRepository = masterclassRepository;
        this.templateRepository = templateRepository;
    }

    public Masterclass createMasterclass(String slug, LocalDateTime date, long templateId) {
        MasterclassTemplate template = templateRepository.findById(templateId)
                .orElseThrow(() -> new RuntimeException("Template not found with the id of: " + templateId));

        Masterclass masterclass = new Masterclass();
        masterclass.setSlug(slug);
        masterclass.setDate(date);
        masterclass.setTemplate(template);

        return masterclassRepository.save(masterclass);
    }

    public List<Masterclass> getAll() {
        return masterclassRepository.findAll();
    }

    public Masterclass getById(long id){
        return masterclassRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Masterclass with this id does not exist"));
    }

}

package com.nexident.masterclass_admin.controller;

import com.nexident.masterclass_admin.dto.MasterclassCreateRequest;
import com.nexident.masterclass_admin.entity.Masterclass;
import com.nexident.masterclass_admin.service.MasterclassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/masterclass")
public class MasterclassController {
    @Autowired
    private MasterclassService service;

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody MasterclassCreateRequest request) {
        try {
            Masterclass created = service.createMasterclass(request.getSlug(), request.getDate(), request.getDaysLong(), request.isDefinate(), request.isTheoretical(),
                    request.getLink(), request.getTemplateId());
            return ResponseEntity.status(HttpStatus.CREATED).body(created);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<Masterclass>> getAll() {
        List<Masterclass> list = service.getAll();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getMasterclassById(@PathVariable long id){
        try{
            return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
        }catch (RuntimeException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteMasterclassById(@PathVariable long id){
        try{
            return new ResponseEntity<>(service.deleteById(id) + " has been deleted", HttpStatus.OK);
        }catch (RuntimeException e){
            return new ResponseEntity<>(e.getMessage() + " the id that has been in use " + id, HttpStatus.NOT_FOUND);
        }
    }

}

package com.docker.example.Docker.controller;

import com.docker.example.Docker.model.DoctorModel;
import com.docker.example.Docker.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin("*")
public class DoctorControllers {

    @Autowired
    private  DoctorService doctorService;
    @PostMapping("create")
    public ResponseEntity<DoctorModel> createDoc(@RequestBody DoctorModel doctorModel){
            DoctorModel newDoc = doctorService.createDoctor(doctorModel);
            return new ResponseEntity<>(newDoc, HttpStatus.CREATED);
    }

    @GetMapping("doctors")
    public ResponseEntity<List<DoctorModel>> createDoc(){
        List<DoctorModel> allDoc = doctorService.getDoctors();
        return new ResponseEntity<>(allDoc, HttpStatus.OK);
    }

    @GetMapping("doctors/{specialization}")
    public ResponseEntity<List<DoctorModel>> specializationType(@PathVariable  String specialization){
        List<DoctorModel> docSpecialization = doctorService.getSpecialization(specialization);
        return new ResponseEntity<>(docSpecialization, HttpStatus.OK);
    }

    @GetMapping("doctorsByName/{specialization}")
    public ResponseEntity<List<String>> doctorsByName(@PathVariable  String specialization){
        List<String> docNames = doctorService.getSpecializationDoctor(specialization);
        return new ResponseEntity<>(docNames, HttpStatus.OK);
    }
}

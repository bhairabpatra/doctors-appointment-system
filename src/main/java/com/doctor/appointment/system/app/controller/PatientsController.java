package com.doctor.appointment.system.app.controller;


import com.doctor.appointment.system.app.model.PatientModel;
import com.doctor.appointment.system.app.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin("*")
public class PatientsController {

    @Autowired
    private PatientService patientService;

    @PostMapping("addPatient")
    public ResponseEntity<PatientModel> addPatients(@RequestBody PatientModel patientModel) {
        PatientModel newPatient = patientService.addPatient(patientModel);
        return new ResponseEntity<>(newPatient, HttpStatus.CREATED);
    }

    @GetMapping("patient/{phone}")
    public ResponseEntity<PatientModel> getPatient(@PathVariable String phone) {
        PatientModel patient = patientService.getPatientByPhone(phone);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }


}

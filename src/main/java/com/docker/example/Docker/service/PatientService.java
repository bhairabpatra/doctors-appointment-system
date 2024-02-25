package com.docker.example.Docker.service;

import com.docker.example.Docker.model.PatientModel;

public interface PatientService {

      PatientModel addPatient(PatientModel patientModel);
      PatientModel getPatientByPhone(String phone);

}

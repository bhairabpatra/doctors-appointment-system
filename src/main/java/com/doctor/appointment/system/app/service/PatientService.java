package com.doctor.appointment.system.app.service;

import com.doctor.appointment.system.app.model.PatientModel;

public interface PatientService {

      PatientModel addPatient(PatientModel patientModel);
      PatientModel getPatientByPhone(String phone);

}

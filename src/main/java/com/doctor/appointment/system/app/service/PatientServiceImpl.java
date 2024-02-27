package com.doctor.appointment.system.app.service;

import com.doctor.appointment.system.app.model.PatientModel;
import com.doctor.appointment.system.app.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public PatientModel addPatient(PatientModel patientModel) {
        patientModel.setToken_number(generateToken(patientModel));
        return patientRepository.save(patientModel);
    }

    private String generateToken(PatientModel patientModel) {
        String token = patientModel.getPhone().substring(6);
        return token;
    }

    @Override
    public PatientModel getPatientByPhone(String phone) {
        Optional<PatientModel> patient = patientRepository.findByPhone(phone);
        if (patient.isPresent()) {
            return patient.get();
        } else {
            return null;
        }
    }

}

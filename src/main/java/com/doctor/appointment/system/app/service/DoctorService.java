package com.doctor.appointment.system.app.service;


import com.doctor.appointment.system.app.model.DoctorModel;

import java.util.List;

public interface DoctorService {

    public DoctorModel createDoctor(DoctorModel doctorModel);
    public List<DoctorModel> getDoctors();

    public List<DoctorModel> getSpecialization(String getSpecialization);

    List<String> getSpecializationDoctor(String specialization);

    List<DoctorModel> getSearchDoctors(String specializationOrName);
}

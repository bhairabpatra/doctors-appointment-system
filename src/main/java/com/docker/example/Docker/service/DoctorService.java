package com.docker.example.Docker.service;


import com.docker.example.Docker.model.DoctorModel;

import java.util.List;

public interface DoctorService {

    public DoctorModel createDoctor(DoctorModel doctorModel);
    public List<DoctorModel> getDoctors();

    public List<DoctorModel> getSpecialization(String getSpecialization);

    List<String> getSpecializationDoctor(String specialization);


}

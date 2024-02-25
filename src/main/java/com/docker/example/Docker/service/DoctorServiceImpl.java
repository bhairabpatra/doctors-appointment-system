package com.docker.example.Docker.service;

import com.docker.example.Docker.model.DoctorModel;
import com.docker.example.Docker.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;
    @Override
    public DoctorModel createDoctor(DoctorModel doctorModel) {
        return doctorRepository.save(doctorModel);
    }

    @Override
    public List<DoctorModel> getDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    public List<DoctorModel> getSpecialization(String specialization) {
          Optional<List<DoctorModel>> specialization1  = Optional.
                  ofNullable(doctorRepository.findBySpecialization(specialization));
        return specialization1.orElse(null);
    }

    @Override
    public List<String> getSpecializationDoctor(String specialization) {
        Optional<List<DoctorModel>> specializeDoctor  = Optional.
                ofNullable(doctorRepository.findBySpecialization(specialization));
        return specializeDoctor.map(doctorModels -> doctorModels.stream().map(x -> x.getFirstName().concat(" " + x.getLastName())).toList()).orElse(null);
    }

}

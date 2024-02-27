package com.doctor.appointment.system.app.service;

import com.doctor.appointment.system.app.model.DoctorModel;
import com.doctor.appointment.system.app.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DoctorServiceImpl implements DoctorService {

    List<DoctorModel> doctors = new ArrayList<>();
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
        Optional<List<DoctorModel>> specialization1 = Optional.
                ofNullable(doctorRepository.findBySpecialization(specialization));
        return specialization1.orElse(null);
    }

    @Override
    public List<String> getSpecializationDoctor(String specialization) {
        Optional<List<DoctorModel>> specializeDoctor = Optional.
                ofNullable(doctorRepository.findBySpecialization(specialization));
        return specializeDoctor.map(doctorModels -> doctorModels.stream().map(x -> x.getFirstName().concat(" " + x.getLastName())).toList()).orElse(null);
    }

    @Override
    public List<DoctorModel> getSearchDoctors(String specializationOrName) {

        if (specializationOrName != null) {
            doctors = getDoctors().stream().filter(d -> (d.getFirstName().equalsIgnoreCase(specializationOrName) ||
                            d.getSpecialization().equalsIgnoreCase(specializationOrName)))
                    .collect(Collectors.toList());

            return doctors;
        }
        return null;
    }

}

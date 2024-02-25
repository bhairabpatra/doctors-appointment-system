package com.docker.example.Docker.repository;

import com.docker.example.Docker.model.DoctorModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<DoctorModel, Long> {
    List<DoctorModel> findBySpecialization(String specialization);


}

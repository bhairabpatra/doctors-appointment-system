package com.docker.example.Docker.repository;

import com.docker.example.Docker.model.PatientModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PatientRepository extends JpaRepository<PatientModel, Long> {
    Optional<PatientModel> findByPhone(String phone);
}

package com.doctor.appointment.system.app.repository;

import com.doctor.appointment.system.app.model.PatientModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PatientRepository extends JpaRepository<PatientModel, Long> {
    Optional<PatientModel> findByPhone(String phone);
}

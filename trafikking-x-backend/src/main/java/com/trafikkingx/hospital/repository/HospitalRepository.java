package com.trafikkingx.hospital.repository;

import com.trafikkingx.hospital.entity.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HospitalRepository
        extends JpaRepository<Hospital, Long> {

    Optional<Hospital> findByLicenseNumber(String licenseNumber);

    boolean existsByLicenseNumber(String licenseNumber);

    boolean existsByEmail(String email);

    List<Hospital> findByActiveTrue();

    List<Hospital> findByEmergencyAvailableTrue();

    List<Hospital> findByCityIgnoreCase(String city);
}
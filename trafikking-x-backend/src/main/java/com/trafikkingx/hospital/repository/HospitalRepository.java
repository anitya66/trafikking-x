package com.trafikkingx.hospital.repository;

import com.trafikkingx.hospital.entity.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import java.util.Optional;

public interface HospitalRepository
        extends JpaRepository<Hospital, Long>,
        JpaSpecificationExecutor<Hospital> {

    Optional<Hospital> findByLicenseNumber(String licenseNumber);

    boolean existsByLicenseNumber(String licenseNumber);

    boolean existsByEmail(String email);

    Page<Hospital> findByActiveTrue(Pageable pageable);

    List<Hospital> findByEmergencyAvailableTrue();

    List<Hospital> findByCityIgnoreCase(String city);

    long countByEmergencyAvailableTrue();
}
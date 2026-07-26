package com.trafikkingx.hospital.repository;

import com.trafikkingx.hospital.entity.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import com.trafikkingx.auth.entity.User;

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

    @Query("""
SELECT COALESCE(SUM(h.availableBeds),0)
FROM Hospital h
WHERE h.active = true
""")
Long getTotalAvailableBeds();

@Query("""
SELECT COALESCE(SUM(h.availableIcuBeds),0)
FROM Hospital h
WHERE h.active = true
""")
Long getTotalAvailableIcuBeds();

@Query("""
SELECT COALESCE(SUM(h.totalBeds),0)
FROM Hospital h
WHERE h.active = true
""")
Long getTotalBeds();

Optional<Hospital> findByUser(User user);

}
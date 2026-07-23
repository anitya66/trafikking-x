package com.trafikkingx.ambulance.repository;

import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.ambulance.enums.AmbulanceStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AmbulanceRepository
        extends JpaRepository<Ambulance, Long> {

    boolean existsByVehicleNumber(String vehicleNumber);

    boolean existsByDriverPhone(String driverPhone);

    List<Ambulance> findByActiveTrue();

    List<Ambulance> findByStatus(AmbulanceStatus status);

    List<Ambulance> findByStatusAndActiveTrue(
            AmbulanceStatus status
    );

    long countByStatusAndActiveTrue(
        AmbulanceStatus status
);
}
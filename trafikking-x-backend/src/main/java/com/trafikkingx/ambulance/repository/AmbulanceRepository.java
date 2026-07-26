package com.trafikkingx.ambulance.repository;

import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.ambulance.enums.AmbulanceStatus;
import com.trafikkingx.auth.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

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

Optional<Ambulance> findByUser(User user);

}
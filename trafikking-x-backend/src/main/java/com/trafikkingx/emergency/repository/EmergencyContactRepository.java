package com.trafikkingx.emergency.repository;

import com.trafikkingx.citizen.entity.CitizenProfile;
import com.trafikkingx.emergency.entity.EmergencyContact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EmergencyContactRepository
        extends JpaRepository<EmergencyContact, Long> {

    List<EmergencyContact> findByCitizenProfile(CitizenProfile citizenProfile);

    Optional<EmergencyContact> findByIdAndCitizenProfile(
            Long id,
            CitizenProfile citizenProfile
    );

    boolean existsByCitizenProfileAndPriority(
            CitizenProfile citizenProfile,
            Integer priority
    );

    Optional<EmergencyContact> findByCitizenProfileAndPrimaryContactTrue(
            CitizenProfile citizenProfile
    );
}
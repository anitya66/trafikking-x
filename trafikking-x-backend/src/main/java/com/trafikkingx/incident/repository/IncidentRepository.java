package com.trafikkingx.incident.repository;

import com.trafikkingx.citizen.entity.CitizenProfile;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.incident.enums.IncidentStatus;
import com.trafikkingx.auth.entity.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface IncidentRepository
        extends JpaRepository<Incident, Long> {

    List<Incident> findByCitizenProfileOrderByReportedAtDesc(
            CitizenProfile citizenProfile
    );

    Optional<Incident> findByIdAndCitizenProfile(
            Long id,
            CitizenProfile citizenProfile
    );

    boolean existsByIncidentNumber(String incidentNumber);

    long countByStatus(IncidentStatus status);

    long countByStatusIn(List<IncidentStatus> statuses);

    long countByReportedAtBetween(
            LocalDateTime start,
            LocalDateTime end
    );

    List<Incident> findTop5ByOrderByReportedAtDesc();

    // NEW
    List<Incident> findAllByOrderByReportedAtDesc();

    // NEW
    List<Incident> findByStatusInOrderByReportedAtDesc(
            List<IncidentStatus> statuses
    );

    Optional<Incident> findTopByCitizenProfileUserOrderByCreatedAtDesc(
        User user
);

}
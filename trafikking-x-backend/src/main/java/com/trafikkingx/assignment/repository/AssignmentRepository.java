package com.trafikkingx.assignment.repository;

import com.trafikkingx.assignment.entity.Assignment;
import com.trafikkingx.assignment.enums.AssignmentStatus;
import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.incident.entity.Incident;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AssignmentRepository
        extends JpaRepository<Assignment, Long> {

    List<Assignment> findByAmbulanceOrderByAssignedAtDesc(
            Ambulance ambulance
    );

    List<Assignment> findByStatusOrderByAssignedAtDesc(
            AssignmentStatus status
    );

    Optional<Assignment> findByIncident(
            Incident incident
    );

    boolean existsByIncident(
            Incident incident
    );

   Optional<Assignment>
findFirstByAmbulanceAndStatusInOrderByAssignedAtDesc(
        Ambulance ambulance,
        List<AssignmentStatus> statuses
);

List<Assignment> findByStatusIn(
        List<AssignmentStatus> statuses
);

}
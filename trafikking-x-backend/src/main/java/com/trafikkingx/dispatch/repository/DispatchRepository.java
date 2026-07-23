package com.trafikkingx.dispatch.repository;

import com.trafikkingx.dispatch.entity.Dispatch;
import com.trafikkingx.dispatch.enums.DispatchStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DispatchRepository
        extends JpaRepository<Dispatch, Long> {

    Optional<Dispatch> findByIncidentId(Long incidentId);

    List<Dispatch> findByStatus(DispatchStatus status);

    boolean existsByIncidentId(Long incidentId);

    List<Dispatch> findTop5ByOrderByCreatedAtDesc();

}
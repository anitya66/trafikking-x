package com.trafikkingx.police.repository;

import com.trafikkingx.police.entity.PoliceStation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import com.trafikkingx.auth.entity.User;
import java.util.Optional;

public interface PoliceStationRepository
        extends JpaRepository<PoliceStation, Long>,
        JpaSpecificationExecutor<PoliceStation> {

    boolean existsByStationCode(String stationCode);

    boolean existsByEmail(String email);

    Page<PoliceStation> findByActiveTrue(Pageable pageable);

    long countByActiveTrue();

    Optional<PoliceStation> findByUser(User user);

}
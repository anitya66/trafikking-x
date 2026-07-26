package com.trafikkingx.police.repository;

import com.trafikkingx.dispatch.entity.Dispatch;
import com.trafikkingx.police.entity.PoliceCase;
import com.trafikkingx.police.entity.PoliceStation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PoliceCaseRepository
        extends JpaRepository<PoliceCase, Long> {

    Optional<PoliceCase> findByDispatch(
            Dispatch dispatch
    );

    Optional<PoliceCase> findByIdAndPoliceStation(
            Long id,
            PoliceStation policeStation
    );

    List<PoliceCase> findByPoliceStationOrderByAcceptedAtDesc(
            PoliceStation policeStation
    );

}
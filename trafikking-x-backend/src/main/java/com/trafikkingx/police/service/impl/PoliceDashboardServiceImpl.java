package com.trafikkingx.police.service.impl;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.common.exception.custom.PoliceStationNotFoundException;
import com.trafikkingx.police.dto.response.PoliceDashboardResponse;
import com.trafikkingx.police.entity.PoliceStation;
import com.trafikkingx.police.repository.PoliceStationRepository;
import com.trafikkingx.police.service.PoliceDashboardService;
import com.trafikkingx.security.currentuser.CurrentUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class PoliceDashboardServiceImpl
        implements PoliceDashboardService {

    private final PoliceStationRepository policeStationRepository;

    private final CurrentUserService currentUserService;

    @Override
    public PoliceDashboardResponse getDashboard() {

        User currentUser =
                currentUserService.getCurrentUser();

        PoliceStation station =
                policeStationRepository
                        .findByUser(currentUser)
                        .orElseThrow(
                                PoliceStationNotFoundException::new
                        );

        log.info(
                "Loading police dashboard for {}",
                station.getStationName()
        );

        return PoliceDashboardResponse.builder()
                .activeCases(0L)
                .availableOfficers(24L)
                .patrolUnits(8L)
                .highPriorityCases(0L)
                .stationStatus(
                        station.getActive()
                                ? "ACTIVE"
                                : "INACTIVE"
                )
                .aiRecommendation( "No critical police alerts.")
                .totalOfficers(30L)
                .availableVehicles(6L)
                .pendingInvestigations(4L)        
                .build();
    }

}
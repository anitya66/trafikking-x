package com.trafikkingx.dashboard.service.impl;

import com.trafikkingx.ambulance.enums.AmbulanceStatus;
import com.trafikkingx.ambulance.repository.AmbulanceRepository;
import com.trafikkingx.dashboard.dto.response.DashboardSummaryResponse;
import com.trafikkingx.dashboard.service.DashboardService;
import com.trafikkingx.hospital.repository.HospitalRepository;
import com.trafikkingx.incident.enums.IncidentStatus;
import com.trafikkingx.incident.repository.IncidentRepository;
import com.trafikkingx.police.repository.PoliceStationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.trafikkingx.incident.dto.response.IncidentResponse;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.incident.mapper.IncidentMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {

    private final IncidentRepository incidentRepository;
    private final AmbulanceRepository ambulanceRepository;
    private final HospitalRepository hospitalRepository;
    private final PoliceStationRepository policeStationRepository;
    private final IncidentMapper incidentMapper;

    @Override
    public DashboardSummaryResponse getDashboardSummary() {

        log.info("Fetching dashboard summary");

        LocalDateTime startOfDay =
                LocalDateTime.now().toLocalDate().atStartOfDay();

        LocalDateTime endOfDay =
                startOfDay.plusDays(1);

        long activeIncidents =
        incidentRepository.countByStatusIn(
                List.of(
                        IncidentStatus.REPORTED,
                        IncidentStatus.UNDER_REVIEW,
                        IncidentStatus.DISPATCHED,
                        IncidentStatus.RESPONDING
                )
        );

        long todayIncidents =
                incidentRepository.countByReportedAtBetween(
                        startOfDay,
                        endOfDay
                );

        long ambulancesReady =
                ambulanceRepository.countByStatusAndActiveTrue(
                        AmbulanceStatus.AVAILABLE
                );

        long hospitalCapacity =
                hospitalRepository.countByEmergencyAvailableTrue();

        long policeUnits =
                policeStationRepository.countByActiveTrue();

        return DashboardSummaryResponse.builder()
                .activeIncidents(activeIncidents)
                .todayIncidents(todayIncidents)
                .ambulancesReady(ambulancesReady)
                .hospitalCapacity(hospitalCapacity)
                .policeUnits(policeUnits)
                .build();
    }

    @Override
public List<IncidentResponse> getRecentIncidents() {

    log.info("Fetching recent dashboard incidents");

    List<Incident> incidents =
            incidentRepository.findTop5ByOrderByReportedAtDesc();

    return incidents.stream()
            .map(incidentMapper::toResponse)
            .toList();
}
}
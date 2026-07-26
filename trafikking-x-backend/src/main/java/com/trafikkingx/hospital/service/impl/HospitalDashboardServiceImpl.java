package com.trafikkingx.hospital.service.impl;

import com.trafikkingx.dispatch.enums.DispatchStatus;
import com.trafikkingx.dispatch.repository.DispatchRepository;
import com.trafikkingx.hospital.dto.response.AIRecommendationResponse;
import com.trafikkingx.hospital.dto.response.BedOccupancyResponse;
import com.trafikkingx.hospital.dto.response.HospitalDashboardDataResponse;
import com.trafikkingx.hospital.dto.response.HospitalDashboardResponse;
import com.trafikkingx.hospital.dto.response.ICUOccupancyResponse;
import com.trafikkingx.hospital.repository.HospitalRepository;
import com.trafikkingx.hospital.service.HospitalDashboardService;
import com.trafikkingx.incident.enums.IncidentStatus;
import com.trafikkingx.incident.repository.IncidentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class HospitalDashboardServiceImpl
        implements HospitalDashboardService {

    private final HospitalRepository hospitalRepository;
    private final IncidentRepository incidentRepository;
    private final DispatchRepository dispatchRepository;

    @Override
    public HospitalDashboardDataResponse getDashboardData() {

        log.info("Fetching hospital dashboard");

        Long totalBeds = hospitalRepository.getTotalBeds();
        Long availableBeds = hospitalRepository.getTotalAvailableBeds();
        Long availableIcuBeds = hospitalRepository.getTotalAvailableIcuBeds();

        totalBeds = totalBeds == null ? 0L : totalBeds;
        availableBeds = availableBeds == null ? 0L : availableBeds;
        availableIcuBeds = availableIcuBeds == null ? 0L : availableIcuBeds;

        Long occupiedBeds = totalBeds - availableBeds;

        Long totalIcuBeds = availableBeds + availableIcuBeds;
        Long occupiedIcuBeds = totalIcuBeds - availableIcuBeds;

        int hospitalCapacity = 0;

        if (totalBeds > 0) {
            hospitalCapacity = (int) (
                    ((double) occupiedBeds / totalBeds) * 100
            );
        }

        int icuCapacity = 0;

        if (totalIcuBeds > 0) {
            icuCapacity = (int) (
                    ((double) occupiedIcuBeds / totalIcuBeds) * 100
            );
        }

        Long emergencyQueue = incidentRepository.countByStatusIn(
                List.of(
                        IncidentStatus.REPORTED,
                        IncidentStatus.UNDER_REVIEW,
                        IncidentStatus.DISPATCHED,
                        IncidentStatus.RESPONDING
                )
        );

        Long incomingAmbulances = dispatchRepository.countByStatusIn(
                List.of(
                        DispatchStatus.RESOURCES_ASSIGNED,
                        DispatchStatus.DISPATCHED,
                        DispatchStatus.RESPONDING,
                        DispatchStatus.ON_SCENE
                )
        );

        HospitalDashboardResponse metrics =
                HospitalDashboardResponse.builder()
                        .emergencyQueue(emergencyQueue)
                        .availableBeds(availableBeds)
                        .availableIcuBeds(availableIcuBeds)
                        .doctorsOnDuty(27L)
                        .incomingAmbulances(incomingAmbulances)
                        .hospitalCapacity(hospitalCapacity)
                        .todayAdmissions(41L)
                        .emergencyStatus("STABLE")
                        .build();

        BedOccupancyResponse bedOccupancy =
                BedOccupancyResponse.builder()
                        .totalBeds(totalBeds)
                        .occupiedBeds(occupiedBeds)
                        .availableBeds(availableBeds)
                        .occupancyPercentage(hospitalCapacity)
                        .build();

        ICUOccupancyResponse icuOccupancy =
                ICUOccupancyResponse.builder()
                        .totalBeds(totalIcuBeds)
                        .occupiedBeds(occupiedIcuBeds)
                        .availableBeds(availableIcuBeds)
                        .occupancyPercentage(icuCapacity)
                        .build();

        AIRecommendationResponse aiRecommendation =
                AIRecommendationResponse.builder()
                        .title("Hospital Capacity")
                        .recommendation(
                                hospitalCapacity >= 90
                                        ? "Critical occupancy detected. Redirect new emergency cases to nearby hospitals."
                                        : hospitalCapacity >= 75
                                        ? "Capacity is increasing. Prepare additional emergency beds."
                                        : "Hospital capacity is stable."
                        )
                        .priority(
                                hospitalCapacity >= 90
                                        ? "HIGH"
                                        : hospitalCapacity >= 75
                                        ? "MEDIUM"
                                        : "LOW"
                        )
                        .build();

        return HospitalDashboardDataResponse.builder()
                .metrics(metrics)
                .incomingPatients(List.of())
                .incomingAmbulances(List.of())
                .bedOccupancy(bedOccupancy)
                .icuOccupancy(icuOccupancy)
                .aiRecommendation(aiRecommendation)
                .build();
    }

}
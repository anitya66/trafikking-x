package com.trafikkingx.tracking.service.impl;

import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.common.exception.custom.DispatchNotFoundException;
import com.trafikkingx.dispatch.entity.Dispatch;
import com.trafikkingx.dispatch.repository.DispatchRepository;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.tracking.calculator.TrackingCalculator;
import com.trafikkingx.tracking.dto.response.LiveEtaResponse;
import com.trafikkingx.tracking.service.TrackingEtaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class TrackingEtaServiceImpl
        implements TrackingEtaService {

    private final DispatchRepository dispatchRepository;

    private final TrackingCalculator trackingCalculator;

    @Override
    public LiveEtaResponse calculateEta(
            Long ambulanceId
    ) {

        Dispatch dispatch =
                dispatchRepository
                        .findByAmbulanceId(ambulanceId)
                        .orElseThrow(
                                DispatchNotFoundException::new
                        );

        Ambulance ambulance =
                dispatch.getAmbulance();

        Incident incident =
                dispatch.getIncident();

        Double remainingDistance =
                trackingCalculator.calculateRemainingDistance(
                        ambulance,
                        incident
                );

        Integer eta =
                trackingCalculator.calculateEtaMinutes(
                        ambulance,
                        incident
                );

        log.info(
                "ETA calculated for dispatch {} : {} minutes",
                dispatch.getId(),
                eta
        );

        return LiveEtaResponse.builder()
                .dispatchId(
                        dispatch.getId()
                )
                .ambulanceId(
                        ambulanceId
                )
                .remainingDistanceKm(
                        remainingDistance
                )
                .etaMinutes(
                        eta
                )
                .build();

    }

}
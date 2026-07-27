package com.trafikkingx.tracking.service.impl;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.common.exception.custom.DispatchNotFoundException;
import com.trafikkingx.common.exception.custom.IncidentNotFoundException;
import com.trafikkingx.dispatch.entity.Dispatch;
import com.trafikkingx.dispatch.repository.DispatchRepository;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.incident.repository.IncidentRepository;
import com.trafikkingx.tracking.dto.response.CitizenTrackingResponse;
import com.trafikkingx.tracking.dto.response.TrackingResponse;
import com.trafikkingx.tracking.service.CitizenTrackingService;
import com.trafikkingx.tracking.service.TrackingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class CitizenTrackingServiceImpl
        implements CitizenTrackingService {

    private final UserRepository userRepository;

    private final IncidentRepository incidentRepository;

    private final DispatchRepository dispatchRepository;

    private final TrackingService trackingService;

    private User getCurrentCitizen() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return userRepository
                .findByEmail(email)
                .orElseThrow(
                        () -> new UsernameNotFoundException(
                                "User not found."
                        )
                );

    }

    @Override
    public CitizenTrackingResponse getMyTracking() {

        User citizen =
                getCurrentCitizen();

        log.info(
                "Fetching live tracking for citizen {}",
                citizen.getEmail()
        );

        Incident incident =
        incidentRepository
                .findTopByCitizenProfileUserOrderByCreatedAtDesc(
                        citizen
                )
                .orElseThrow(
                        IncidentNotFoundException::new
                );

        Dispatch dispatch =
                dispatchRepository
                        .findByIncidentId(
                                incident.getId()
                        )
                        .orElseThrow(
                                DispatchNotFoundException::new
                        );

        TrackingResponse tracking =
                trackingService.getTracking(
                        dispatch.getId()
                );

        return CitizenTrackingResponse.builder()
                 .dispatchId(
                        dispatch.getId()
                )
                .incidentId(
                        incident.getId()
                )
                .status(
                        tracking.getCurrentStatus()
                )
                .etaMinutes(
                        tracking.getEtaMinutes()
                )
                .remainingDistanceKm(
                        tracking.getRemainingDistanceKm()
                )
                .timeline(
                        tracking.getTimeline()
                )
                .build();

    }

}
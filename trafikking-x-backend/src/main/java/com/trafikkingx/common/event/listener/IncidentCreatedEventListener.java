package com.trafikkingx.common.event.listener;

import com.trafikkingx.common.event.IncidentCreatedEvent;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.incident.repository.IncidentRepository;
import com.trafikkingx.realtime.dto.IncidentLiveResponse;
import com.trafikkingx.realtime.publisher.RealtimePublisher;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class IncidentCreatedEventListener {

    private final IncidentRepository incidentRepository;

    private final RealtimePublisher realtimePublisher;

    @Async
    @EventListener
    public void handleIncidentCreated(
            IncidentCreatedEvent event) {

        log.info(
                "Incident Created Event Received: {}",
                event.getIncidentNumber()
        );

        Incident incident = incidentRepository
                .findById(event.getIncidentId())
                .orElseThrow();

        IncidentLiveResponse response =
                IncidentLiveResponse.builder()
                        .incidentId(incident.getId())
                        .incidentNumber(incident.getIncidentNumber())
                        .incidentType(incident.getIncidentType())
                        .severity(incident.getSeverity())
                        .status(incident.getStatus())
                        .address(incident.getAddress())
                        .latitude(incident.getLatitude())
                        .longitude(incident.getLongitude())
                        .build();

        realtimePublisher.publish(
                "/topic/incidents",
                response
        );

        log.info(
                "Realtime incident published: {}",
                incident.getIncidentNumber()
        );
    }
}
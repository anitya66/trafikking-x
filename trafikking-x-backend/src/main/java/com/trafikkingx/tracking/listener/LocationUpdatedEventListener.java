package com.trafikkingx.tracking.listener;

import com.trafikkingx.tracking.event.LocationUpdatedEvent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import com.trafikkingx.tracking.dto.response.LiveLocationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import com.trafikkingx.tracking.dto.response.LiveEtaResponse;
import com.trafikkingx.tracking.service.TrackingEtaService;

/**
 * First consumer of LocationUpdatedEvent.
 *
 * Future responsibilities:
 *
 * - Dispatcher WebSocket
 * - Citizen WebSocket
 * - Dynamic ETA
 * - Analytics
 * - Audit
 *
 * Currently it only logs GPS updates.
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class LocationUpdatedEventListener {

    private final SimpMessagingTemplate messagingTemplate;

    private final TrackingEtaService trackingEtaService;

    @EventListener
public void handleLocationUpdated(
        LocationUpdatedEvent event
) {

    log.info(
            "Broadcasting live location for ambulance {}",
            event.getAmbulanceId()
    );

    LiveLocationResponse response =
            LiveLocationResponse.builder()
                    .ambulanceId(
                            event.getAmbulanceId()
                    )
                    .latitude(
                            event.getLatitude()
                    )
                    .longitude(
                            event.getLongitude()
                    )
                    .build();

    messagingTemplate.convertAndSend(

            "/topic/tracking/live",

            response

    );

    LiveEtaResponse etaResponse =
        trackingEtaService.calculateEta(
                event.getAmbulanceId()
        );

messagingTemplate.convertAndSend(
        "/topic/tracking/eta",
        etaResponse
);

}

}
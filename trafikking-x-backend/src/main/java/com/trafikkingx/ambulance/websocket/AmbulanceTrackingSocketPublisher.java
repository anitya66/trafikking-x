package com.trafikkingx.ambulance.websocket;

import com.trafikkingx.common.event.AmbulanceLocationUpdatedEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class AmbulanceTrackingSocketPublisher {

    private final SimpMessagingTemplate messagingTemplate;

    @EventListener
    public void handleLocationUpdate(

            AmbulanceLocationUpdatedEvent event) {

        log.info(
                "Broadcasting ambulance {} location",
                event.getAmbulanceId()
        );

        messagingTemplate.convertAndSend(

                "/topic/ambulance/location",

                event

        );

    }

}
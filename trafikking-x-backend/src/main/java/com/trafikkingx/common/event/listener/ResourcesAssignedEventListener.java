package com.trafikkingx.common.event.listener;

import com.trafikkingx.common.event.ResourcesAssignedEvent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class ResourcesAssignedEventListener {

    @Async
    @EventListener
    public void onResourcesAssigned(
            ResourcesAssignedEvent event) {

        log.info(
                """
                Resources Assigned Event Received:
                Dispatch={}
                Incident={}
                Hospital={}
                Ambulance={}
                Police={}
                """,
                event.getDispatchId(),
                event.getIncidentId(),
                event.getHospitalId(),
                event.getAmbulanceId(),
                event.getPoliceStationId()
        );

        /*
         * Notification Engine
         */

        // Notify Hospital

        // Notify Ambulance

        // Notify Police Station

        // Notify Dispatcher

        /*
         * Future
         */

        // Email

        // SMS

        // Push Notification

        // WebSocket

        // AI Analytics

        // Audit Log
    }
}
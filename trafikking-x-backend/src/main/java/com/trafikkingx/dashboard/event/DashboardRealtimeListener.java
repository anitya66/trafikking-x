package com.trafikkingx.dashboard.event;

import com.trafikkingx.common.event.IncidentCreatedEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class DashboardRealtimeListener {

    private final SimpMessagingTemplate messagingTemplate;

    @EventListener
    public void handleIncidentCreated(
            IncidentCreatedEvent event
    ) {

        log.info(
                "Broadcasting dashboard update for incident {}",
                event.getIncidentId()
        );

        messagingTemplate.convertAndSend(
                "/topic/dashboard",
                event
        );
    }
}
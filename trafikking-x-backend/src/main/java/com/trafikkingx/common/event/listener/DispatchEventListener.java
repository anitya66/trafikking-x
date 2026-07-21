package com.trafikkingx.common.event.listener;

import com.trafikkingx.common.event.DispatchCreatedEvent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
@Slf4j
@Component
public class DispatchEventListener {

    @Async
    @EventListener
    public void onDispatchCreated(
            DispatchCreatedEvent event) {

        log.info(
                "Dispatch Created Event Received: Dispatch={}, Incident={}",
                event.getDispatchId(),
                event.getIncidentId()
        );

        // Notification (Later)

        // Email (Later)

        // SMS (Later)

        // Push (Later)

        // AI (Later)
    }
}
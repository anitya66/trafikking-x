package com.trafikkingx.notification.event;

import com.trafikkingx.notification.service.NotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class NotificationEventListener {

    private final NotificationService notificationService;

    @Async
    @EventListener
    public void handleNotificationEvent(NotificationEvent event) {

        log.info(
                "Processing notification event for recipient: {}",
                event.getRecipient().getEmail()
        );

        notificationService.createNotification(
                event.getRecipient(),
                event.getIncidentId(),
                event.getTitle(),
                event.getMessage(),
                event.getType()
        );

        log.info("Notification event processed successfully.");
    }
}
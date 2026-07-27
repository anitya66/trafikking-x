package com.trafikkingx.assignment.listener;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.common.event.AssignmentCreatedEvent;
import com.trafikkingx.common.exception.custom.UserNotFoundException;
import com.trafikkingx.notification.enums.NotificationType;
import com.trafikkingx.notification.service.NotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

/**
 * Consumes AssignmentCreatedEvent.
 *
 * Responsibilities:
 * - Notify assigned ambulance user
 * - Future:
 *      - Tracking
 *      - Analytics
 *      - Audit
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class AssignmentCreatedEventListener {

    private final NotificationService notificationService;

    private final UserRepository userRepository;

    @EventListener
    public void handleAssignmentCreated(
            AssignmentCreatedEvent event
    ) {

        log.info(
                "Handling AssignmentCreatedEvent for assignment {}",
                event.getAssignmentId()
        );

        User recipient =
                userRepository
                        .findById(
                                event.getRecipientUserId()
                        )
                        .orElseThrow(
                                UserNotFoundException::new
                        );

        notificationService.createNotification(

                recipient,

                event.getIncidentId(),

                "New Emergency Assignment",

                """
                You have been assigned to an emergency incident.
                Please acknowledge and respond immediately.
                """,

                NotificationType.AMBULANCE_ASSIGNED

        );

        log.info(
                "Assignment notification sent to {}",
                recipient.getEmail()
        );

    }

}
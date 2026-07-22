package com.trafikkingx.notification.event;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.notification.enums.NotificationType;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class NotificationEvent {

    private final User recipient;

    private final Long incidentId;

    private final String title;

    private final String message;

    private final NotificationType type;
}
package com.trafikkingx.notification.dto;

import com.trafikkingx.notification.enums.NotificationStatus;
import com.trafikkingx.notification.enums.NotificationType;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NotificationResponse {

    private Long id;

    private String title;

    private String message;

    private NotificationType type;

    private NotificationStatus status;

    private Boolean isRead;

    private Long incidentId;

    private LocalDateTime createdAt;
}
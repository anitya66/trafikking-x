package com.trafikkingx.notification.entity;

import com.trafikkingx.common.entity.BaseEntity;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.notification.enums.NotificationStatus;
import com.trafikkingx.notification.enums.NotificationType;
import com.trafikkingx.auth.entity.*;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "notifications")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Notification extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipient_id", nullable = false)
    private User recipient;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "incident_id")
    private Incident incident;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 1000)
    private String message;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private NotificationType type;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private NotificationStatus status;

    @Column(nullable = false)
    @Builder.Default
    private Boolean isRead = false;
}
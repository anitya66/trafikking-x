package com.trafikkingx.notification.service;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.notification.dto.NotificationResponse;
import com.trafikkingx.notification.enums.NotificationType;

import java.util.List;

public interface NotificationService {

    void createNotification(
            User recipient,
            Long incidentId,
            String title,
            String message,
            NotificationType type
    );

    List<NotificationResponse> getMyNotifications();

    List<NotificationResponse> getUnreadNotifications();

    long getUnreadCount();

    void markAsRead(Long notificationId);

    void markAllAsRead();

    void deleteNotification(Long notificationId);
}
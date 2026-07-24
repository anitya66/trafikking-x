package com.trafikkingx.notification.service.impl;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.notification.enums.NotificationStatus;
import com.trafikkingx.notification.enums.NotificationType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import com.trafikkingx.common.exception.custom.NotificationAccessDeniedException;
import com.trafikkingx.common.exception.custom.NotificationNotFoundException;
import com.trafikkingx.notification.dto.NotificationResponse;
import com.trafikkingx.notification.entity.Notification;

import java.util.List;

import com.trafikkingx.notification.mapper.NotificationMapper;
import com.trafikkingx.notification.repository.NotificationRepository;
import com.trafikkingx.notification.service.NotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Slf4j
@Service
@RequiredArgsConstructor
public class NotificationServiceImpl implements NotificationService {

    private final NotificationRepository notificationRepository;

    private final NotificationMapper notificationMapper;

    private final UserRepository userRepository;

    private final SimpMessagingTemplate messagingTemplate;

    private Notification getNotification(Long id) {

        return notificationRepository.findById(id)
                .orElseThrow(
                        NotificationNotFoundException::new
                );
    }

        private User getCurrentUser() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return userRepository.findByEmail(email)
                .orElseThrow(() -> {

                    log.error(
                            "Authenticated user not found: {}",
                            email
                    );

                    return new UsernameNotFoundException(
                            "User not found"
                    );
                });
    }

@Override
@Transactional
public void createNotification(
        User recipient,
        Long incidentId,
        String title,
        String message,
        NotificationType type) {

    log.info(
            "Creating notification for user: {}",
            recipient.getEmail()
    );

    Notification notification = Notification.builder()
            .recipient(recipient)
            .title(title)
            .message(message)
            .type(type)
            .status(NotificationStatus.SENT)
            .isRead(false)
            .build();

    if (incidentId != null) {

    Incident incident = new Incident();

    incident.setId(incidentId);

    notification.setIncident(incident);
}

    Notification savedNotification =
        notificationRepository.save(notification);

NotificationResponse response =
        notificationMapper.toResponse(savedNotification);

messagingTemplate.convertAndSendToUser(
        recipient.getEmail(),
        "/queue/notifications",
        response
);

log.info(
        "Notification created and pushed to user: {}",
        recipient.getEmail()
);
}

@Override
public List<NotificationResponse> getMyNotifications() {

    User currentUser = getCurrentUser();

    log.info(
            "Fetching notifications for user: {}",
            currentUser.getEmail()
    );

    return notificationRepository
            .findByRecipientOrderByCreatedAtDesc(currentUser)
            .stream()
            .map(notificationMapper::toResponse)
            .toList();
}

@Override
public List<NotificationResponse> getUnreadNotifications() {

    User currentUser = getCurrentUser();

    log.info(
            "Fetching unread notifications for user: {}",
            currentUser.getEmail()
    );

    return notificationRepository
            .findByRecipientAndIsReadFalseOrderByCreatedAtDesc(currentUser)
            .stream()
            .map(notificationMapper::toResponse)
            .toList();
}

@Override
public long getUnreadCount() {

    User currentUser = getCurrentUser();

    log.info(
            "Fetching unread notification count for user: {}",
            currentUser.getEmail()
    );

    return notificationRepository
            .countByRecipientAndIsReadFalse(currentUser);
}

@Override
@Transactional
public void markAsRead(Long notificationId) {

    User currentUser = getCurrentUser();

    Notification notification =
            getNotification(notificationId);

    if (!notification.getRecipient()
            .getId()
            .equals(currentUser.getId())) {

        throw new NotificationAccessDeniedException();
    }

    notification.setIsRead(true);

    notificationRepository.save(notification);

    log.info(
            "Notification {} marked as read.",
            notificationId
    );
}

@Override
@Transactional
public void markAllAsRead() {

    User currentUser = getCurrentUser();

    log.info(
            "Marking all notifications as read for user: {}",
            currentUser.getEmail()
    );

    List<Notification> notifications =
            notificationRepository
                    .findByRecipientAndIsReadFalseOrderByCreatedAtDesc(
                            currentUser
                    );

    notifications.forEach(notification ->
            notification.setIsRead(true)
    );

    notificationRepository.saveAll(notifications);

    log.info(
            "All notifications marked as read."
    );
}

@Override
@Transactional
public void deleteNotification(Long notificationId) {

    User currentUser = getCurrentUser();

    Notification notification =
            getNotification(notificationId);

    if (!notification.getRecipient()
            .getId()
            .equals(currentUser.getId())) {

        throw new NotificationAccessDeniedException();
    }

    notificationRepository.delete(notification);

    log.info(
            "Notification {} deleted successfully.",
            notificationId
    );
}


}
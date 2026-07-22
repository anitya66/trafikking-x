package com.trafikkingx.notification.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.notification.dto.NotificationResponse;
import com.trafikkingx.notification.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/notifications")
public class NotificationController {

    private final NotificationService notificationService;

    @GetMapping
    public ApiResponse<List<NotificationResponse>> getMyNotifications() {

        return ApiResponse.<List<NotificationResponse>>builder()
                .success(true)
                .message("Notifications fetched successfully.")
                .data(notificationService.getMyNotifications())
                .build();
    }

    @GetMapping("/unread")
    public ApiResponse<List<NotificationResponse>> getUnreadNotifications() {

        return ApiResponse.<List<NotificationResponse>>builder()
                .success(true)
                .message("Unread notifications fetched successfully.")
                .data(notificationService.getUnreadNotifications())
                .build();
    }

    @GetMapping("/unread/count")
    public ApiResponse<Long> getUnreadCount() {

        return ApiResponse.<Long>builder()
                .success(true)
                .message("Unread notification count fetched successfully.")
                .data(notificationService.getUnreadCount())
                .build();
    }

    @PatchMapping("/{id}/read")
    public ApiResponse<String> markAsRead(
            @PathVariable Long id) {

        notificationService.markAsRead(id);

        return ApiResponse.<String>builder()
                .success(true)
                .message("Notification marked as read.")
                .data(null)
                .build();
    }

    @PatchMapping("/read-all")
    public ApiResponse<String> markAllAsRead() {

        notificationService.markAllAsRead();

        return ApiResponse.<String>builder()
                .success(true)
                .message("All notifications marked as read.")
                .data(null)
                .build();
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteNotification(
            @PathVariable Long id) {

        notificationService.deleteNotification(id);

        return ApiResponse.<String>builder()
                .success(true)
                .message("Notification deleted successfully.")
                .data(null)
                .build();
    }
}
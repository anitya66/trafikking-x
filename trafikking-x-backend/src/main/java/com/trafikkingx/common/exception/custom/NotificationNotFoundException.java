package com.trafikkingx.common.exception.custom;

public class NotificationNotFoundException extends RuntimeException {

    public NotificationNotFoundException() {
        super("Notification not found.");
    }
}
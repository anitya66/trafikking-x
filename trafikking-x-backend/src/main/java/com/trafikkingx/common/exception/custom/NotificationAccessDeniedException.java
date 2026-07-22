package com.trafikkingx.common.exception.custom;

public class NotificationAccessDeniedException extends RuntimeException {

    public NotificationAccessDeniedException() {
        super("You are not allowed to access this notification.");
    }
}
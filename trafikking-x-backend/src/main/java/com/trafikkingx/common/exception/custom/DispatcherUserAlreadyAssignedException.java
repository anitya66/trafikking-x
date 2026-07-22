package com.trafikkingx.common.exception.custom;

public class DispatcherUserAlreadyAssignedException extends RuntimeException {

    public DispatcherUserAlreadyAssignedException(Long userId) {
        super("User is already assigned to another dispatcher. User ID: " + userId);
    }
}
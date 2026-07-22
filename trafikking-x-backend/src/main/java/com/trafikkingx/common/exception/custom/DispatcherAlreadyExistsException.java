package com.trafikkingx.common.exception.custom;

public class DispatcherAlreadyExistsException extends RuntimeException {

    public DispatcherAlreadyExistsException(String employeeId) {
        super("Dispatcher already exists with employee ID: " + employeeId);
    }
}
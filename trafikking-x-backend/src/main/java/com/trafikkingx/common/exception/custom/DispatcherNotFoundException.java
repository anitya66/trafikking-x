package com.trafikkingx.common.exception.custom;

public class DispatcherNotFoundException extends RuntimeException {

    public DispatcherNotFoundException() {
        super("Dispatcher not found.");
    }
}
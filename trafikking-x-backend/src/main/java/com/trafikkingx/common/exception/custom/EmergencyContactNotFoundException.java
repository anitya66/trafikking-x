package com.trafikkingx.common.exception.custom;

public class EmergencyContactNotFoundException
        extends RuntimeException {

    public EmergencyContactNotFoundException() {
        super("Emergency contact not found.");
    }
}
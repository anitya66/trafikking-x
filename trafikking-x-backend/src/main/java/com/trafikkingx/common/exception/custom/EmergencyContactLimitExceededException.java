package com.trafikkingx.common.exception.custom;

public class EmergencyContactLimitExceededException
        extends RuntimeException {

    public EmergencyContactLimitExceededException() {
        super("Maximum emergency contact limit reached.");
    }
}
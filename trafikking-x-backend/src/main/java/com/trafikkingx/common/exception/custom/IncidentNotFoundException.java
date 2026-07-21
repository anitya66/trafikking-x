package com.trafikkingx.common.exception.custom;

public class IncidentNotFoundException extends RuntimeException {

    public IncidentNotFoundException() {
        super("Incident not found.");
    }
}
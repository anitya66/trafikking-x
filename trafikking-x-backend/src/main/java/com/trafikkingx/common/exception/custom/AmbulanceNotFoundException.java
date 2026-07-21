package com.trafikkingx.common.exception.custom;

public class AmbulanceNotFoundException
        extends RuntimeException {

    public AmbulanceNotFoundException() {
        super("Ambulance not found.");
    }
}
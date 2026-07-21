package com.trafikkingx.common.exception.custom;

public class CitizenProfileNotFoundException extends RuntimeException {

    public CitizenProfileNotFoundException() {
        super("Citizen profile not found.");
    }

}
package com.trafikkingx.common.exception.custom;

public class PoliceStationEmailAlreadyExistsException
        extends RuntimeException {

    public PoliceStationEmailAlreadyExistsException(
            String email) {

        super("Police station email already exists: " + email);
    }
}
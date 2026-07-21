package com.trafikkingx.common.exception.custom;

public class InvalidPoliceStationException
        extends RuntimeException {

    public InvalidPoliceStationException(
            String message) {

        super(message);
    }
}
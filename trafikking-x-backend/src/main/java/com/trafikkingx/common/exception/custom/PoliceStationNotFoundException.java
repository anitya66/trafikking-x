package com.trafikkingx.common.exception.custom;

public class PoliceStationNotFoundException
        extends RuntimeException {

    public PoliceStationNotFoundException() {
        super("Police station not found.");
    }
}
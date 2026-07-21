package com.trafikkingx.common.exception.custom;

public class StationCodeAlreadyExistsException
        extends RuntimeException {

    public StationCodeAlreadyExistsException(
            String stationCode) {

        super("Station code already exists: " + stationCode);
    }
}
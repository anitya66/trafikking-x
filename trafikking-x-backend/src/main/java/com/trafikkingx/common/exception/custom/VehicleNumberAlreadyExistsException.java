package com.trafikkingx.common.exception.custom;

public class VehicleNumberAlreadyExistsException
        extends RuntimeException {

    public VehicleNumberAlreadyExistsException(
            String vehicleNumber) {

        super("Vehicle number already exists: " + vehicleNumber);
    }
}
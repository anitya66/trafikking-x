package com.trafikkingx.common.exception.custom;

public class DriverPhoneAlreadyExistsException
        extends RuntimeException {

    public DriverPhoneAlreadyExistsException(
            String phone) {

        super("Driver phone already exists: " + phone);
    }
}
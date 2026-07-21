package com.trafikkingx.common.exception.custom;

public class HospitalNotFoundException extends RuntimeException {

    public HospitalNotFoundException() {
        super("Hospital not found.");
    }
}
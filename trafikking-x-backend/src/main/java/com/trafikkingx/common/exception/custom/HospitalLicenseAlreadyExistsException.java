package com.trafikkingx.common.exception.custom;

public class HospitalLicenseAlreadyExistsException
        extends RuntimeException {

    public HospitalLicenseAlreadyExistsException(String licenseNumber) {
        super("Hospital license already exists: " + licenseNumber);
    }
}
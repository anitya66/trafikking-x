package com.trafikkingx.common.exception.custom;

public class HospitalEmailAlreadyExistsException
        extends RuntimeException {

    public HospitalEmailAlreadyExistsException(String email) {
        super("Hospital email already exists: " + email);
    }
}
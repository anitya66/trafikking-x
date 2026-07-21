package com.trafikkingx.common.exception.custom;

public class CitizenProfileAlreadyExistsException extends RuntimeException {

    public CitizenProfileAlreadyExistsException() {
        super("Citizen profile already exists.");
    }

}
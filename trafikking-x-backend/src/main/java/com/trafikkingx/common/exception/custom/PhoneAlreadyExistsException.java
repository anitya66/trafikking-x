package com.trafikkingx.common.exception.custom;

public class PhoneAlreadyExistsException extends RuntimeException {

    public PhoneAlreadyExistsException(String phoneNumber) {
        super("Phone number already exists : " + phoneNumber);
    }

}
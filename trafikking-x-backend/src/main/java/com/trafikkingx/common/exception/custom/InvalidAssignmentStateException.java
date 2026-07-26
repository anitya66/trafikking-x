package com.trafikkingx.common.exception.custom;

public class InvalidAssignmentStateException
        extends RuntimeException {

    public InvalidAssignmentStateException(
            String message
    ) {
        super(message);
    }

}
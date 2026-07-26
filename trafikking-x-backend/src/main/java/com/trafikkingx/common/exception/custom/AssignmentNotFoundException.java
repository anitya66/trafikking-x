package com.trafikkingx.common.exception.custom;

public class AssignmentNotFoundException
        extends RuntimeException {

    public AssignmentNotFoundException() {

        super("Assignment not found.");

    }

}
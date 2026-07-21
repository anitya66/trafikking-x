package com.trafikkingx.common.exception.custom;

public class DuplicatePriorityException
        extends RuntimeException {

    public DuplicatePriorityException() {
        super("Priority already exists.");
    }
}
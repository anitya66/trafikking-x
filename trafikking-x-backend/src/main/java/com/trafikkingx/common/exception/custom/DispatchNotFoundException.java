package com.trafikkingx.common.exception.custom;

public class DispatchNotFoundException
        extends RuntimeException {

    public DispatchNotFoundException() {
        super("Dispatch not found.");
    }
}
package com.trafikkingx.common.exception.custom;

public class DispatchAlreadyExistsException
        extends RuntimeException {

    public DispatchAlreadyExistsException(
            Long incidentId) {

        super(
                "Dispatch already exists for incident: "
                        + incidentId
        );
    }
}
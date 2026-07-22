package com.trafikkingx.common.event;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class IncidentCreatedEvent {

    /**
     * Incident Id
     */
    private final Long incidentId;

    /**
     * Incident Number
     */
    private final String incidentNumber;
}
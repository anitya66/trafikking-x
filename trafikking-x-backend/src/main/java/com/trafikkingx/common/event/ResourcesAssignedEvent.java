package com.trafikkingx.common.event;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ResourcesAssignedEvent {

    /**
     * Dispatch Id
     */
    private final Long dispatchId;

    /**
     * Incident Id
     */
    private final Long incidentId;

    /**
     * Assigned Hospital Id
     */
    private final Long hospitalId;

    /**
     * Assigned Ambulance Id
     */
    private final Long ambulanceId;

    /**
     * Assigned Police Station Id
     */
    private final Long policeStationId;
}
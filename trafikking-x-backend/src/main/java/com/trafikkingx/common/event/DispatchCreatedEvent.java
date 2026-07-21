package com.trafikkingx.common.event;

import lombok.Getter;

@Getter
public class DispatchCreatedEvent {

    private final Long dispatchId;

    private final Long incidentId;

    public DispatchCreatedEvent(
            Long dispatchId,
            Long incidentId) {

        this.dispatchId = dispatchId;
        this.incidentId = incidentId;
    }
}
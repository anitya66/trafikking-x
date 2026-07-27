package com.trafikkingx.tracking.dto.response;

import com.trafikkingx.dispatch.enums.DispatchStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class CitizenTrackingResponse {

    /**
     * Incident being tracked.
     */
    private final Long incidentId;

    /**
     * Current dispatch status.
     */
    private final DispatchStatus status;

    /**
     * Latest ETA.
     */
    private final Integer etaMinutes;

    /**
     * Remaining distance.
     */
    private final Double remainingDistanceKm;

    /**
     * Timeline visible to citizen.
     */
    private final List<TimelineEventResponse> timeline;

    private final Long dispatchId;

}
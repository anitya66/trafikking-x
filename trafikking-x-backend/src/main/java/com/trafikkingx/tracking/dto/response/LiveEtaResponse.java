package com.trafikkingx.tracking.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class LiveEtaResponse {

    /**
     * Dispatch currently being tracked.
     */
    private final Long dispatchId;

    /**
     * Ambulance sending the update.
     */
    private final Long ambulanceId;

    /**
     * Remaining distance in KM.
     */
    private final Double remainingDistanceKm;

    /**
     * ETA in minutes.
     */
    private final Integer etaMinutes;

}
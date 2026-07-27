package com.trafikkingx.tracking.service;

import com.trafikkingx.tracking.dto.response.LiveEtaResponse;

public interface TrackingEtaService {

    /**
     * Calculates the latest ETA for the
     * active dispatch of the given ambulance.
     */
    LiveEtaResponse calculateEta(
            Long ambulanceId
    );

}
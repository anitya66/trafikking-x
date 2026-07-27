package com.trafikkingx.tracking.service;

import com.trafikkingx.tracking.dto.response.CitizenTrackingResponse;

public interface CitizenTrackingService {

    /**
     * Returns live tracking information for the
     * authenticated citizen's active incident.
     */
    CitizenTrackingResponse getMyTracking();

}
package com.trafikkingx.tracking.service;

import com.trafikkingx.tracking.dto.request.UpdateLocationRequest;

public interface TrackingUpdateService {

    /**
     * Updates the current GPS location of the
     * authenticated ambulance.
     */
    void updateLocation(
            UpdateLocationRequest request
    );

}
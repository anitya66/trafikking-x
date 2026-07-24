package com.trafikkingx.tracking.service;

import com.trafikkingx.tracking.dto.response.TrackingResponse;

public interface TrackingService {

    TrackingResponse getTracking(
            Long dispatchId
    );

}
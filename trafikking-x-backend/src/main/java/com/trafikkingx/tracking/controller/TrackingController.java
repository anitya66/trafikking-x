package com.trafikkingx.tracking.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.tracking.dto.response.TrackingResponse;
import com.trafikkingx.tracking.service.TrackingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/tracking")
@RequiredArgsConstructor
public class TrackingController {

    private final TrackingService trackingService;

    @GetMapping("/{dispatchId}")
    public ApiResponse<TrackingResponse> getTracking(
            @PathVariable Long dispatchId) {

        return ApiResponse.<TrackingResponse>builder()
                .success(true)
                .message("Tracking fetched successfully.")
                .data(
                        trackingService.getTracking(
                                dispatchId
                        )
                )
                .build();
    }

}
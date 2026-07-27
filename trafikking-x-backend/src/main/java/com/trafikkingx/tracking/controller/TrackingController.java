package com.trafikkingx.tracking.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.tracking.dto.response.TrackingResponse;
import com.trafikkingx.tracking.service.TrackingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.trafikkingx.tracking.dto.request.UpdateLocationRequest;
import com.trafikkingx.tracking.service.TrackingUpdateService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/tracking")
@RequiredArgsConstructor
public class TrackingController {

    private final TrackingService trackingService;

    private final TrackingUpdateService trackingUpdateService;

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

    @PostMapping("/location")
public ApiResponse<Void> updateLocation(

        @Valid
        @RequestBody
        UpdateLocationRequest request

) {

    trackingUpdateService.updateLocation(
            request
    );

    return ApiResponse.<Void>builder()
            .success(true)
            .message("Location updated successfully.")
            .build();

}

}
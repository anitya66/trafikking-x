package com.trafikkingx.tracking.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.tracking.dto.response.CitizenTrackingResponse;
import com.trafikkingx.tracking.service.CitizenTrackingService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/citizen/tracking")
@RequiredArgsConstructor
public class CitizenTrackingController {

    private final CitizenTrackingService citizenTrackingService;

    @Operation(summary = "Get My Live Tracking")
    @GetMapping
    public ApiResponse<CitizenTrackingResponse> getMyTracking() {

        CitizenTrackingResponse response =
                citizenTrackingService.getMyTracking();

        return ApiResponse.<CitizenTrackingResponse>builder()
                .success(true)
                .message("Citizen tracking fetched successfully.")
                .data(response)
                .build();
    }

}
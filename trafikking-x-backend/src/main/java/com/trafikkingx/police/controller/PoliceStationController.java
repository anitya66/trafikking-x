package com.trafikkingx.police.controller;

import com.trafikkingx.common.pagination.PageResponse;
import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.police.dto.request.CreatePoliceStationRequest;
import com.trafikkingx.police.dto.request.UpdatePoliceStationRequest;
import com.trafikkingx.police.dto.response.PoliceStationResponse;
import com.trafikkingx.police.enums.PoliceStationType;
import com.trafikkingx.police.service.PoliceStationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/police-stations")
@RequiredArgsConstructor
public class PoliceStationController {

    private final PoliceStationService policeStationService;

    @Operation(summary = "Create Police Station")
    @PostMapping
    public ApiResponse<PoliceStationResponse> createPoliceStation(
            @Valid @RequestBody CreatePoliceStationRequest request) {

        PoliceStationResponse response =
                policeStationService.createPoliceStation(request);

        return ApiResponse.<PoliceStationResponse>builder()
                .success(true)
                .message("Police station created successfully")
                .data(response)
                .build();
    }

    @Operation(summary = "Get All Police Stations")
    @GetMapping
    public ApiResponse<PageResponse<PoliceStationResponse>> getAllPoliceStations(

            @RequestParam(defaultValue = "0")
            int page,

            @RequestParam(defaultValue = "10")
            int size,

            @RequestParam(required = false)
            String city,

            @RequestParam(required = false)
            PoliceStationType type) {

        PageResponse<PoliceStationResponse> response =
                policeStationService.getAllPoliceStations(
                        page,
                        size,
                        city,
                        type
                );

        return ApiResponse.<PageResponse<PoliceStationResponse>>builder()
                .success(true)
                .message("Police stations fetched successfully")
                .data(response)
                .build();
    }

    @Operation(summary = "Get Police Station By Id")
    @GetMapping("/{id}")
    public ApiResponse<PoliceStationResponse> getPoliceStationById(

            @Parameter(description = "Police Station ID")
            @PathVariable Long id) {

        PoliceStationResponse response =
                policeStationService.getPoliceStationById(id);

        return ApiResponse.<PoliceStationResponse>builder()
                .success(true)
                .message("Police station fetched successfully")
                .data(response)
                .build();
    }

    @Operation(summary = "Update Police Station")
    @PutMapping("/{id}")
    public ApiResponse<PoliceStationResponse> updatePoliceStation(

            @PathVariable Long id,

            @Valid
            @RequestBody
            UpdatePoliceStationRequest request) {

        PoliceStationResponse response =
                policeStationService.updatePoliceStation(
                        id,
                        request
                );

        return ApiResponse.<PoliceStationResponse>builder()
                .success(true)
                .message("Police station updated successfully")
                .data(response)
                .build();
    }

    @Operation(summary = "Delete Police Station")
    @DeleteMapping("/{id}")
    public ApiResponse<Void> deletePoliceStation(

            @PathVariable Long id) {

        policeStationService.deletePoliceStation(id);

        return ApiResponse.<Void>builder()
                .success(true)
                .message("Police station deleted successfully")
                .build();
    }
}
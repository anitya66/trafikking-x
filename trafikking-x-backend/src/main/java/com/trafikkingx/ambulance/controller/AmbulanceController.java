package com.trafikkingx.ambulance.controller;

import com.trafikkingx.ambulance.dto.request.CreateAmbulanceRequest;
import com.trafikkingx.ambulance.dto.request.UpdateAmbulanceRequest;
import com.trafikkingx.ambulance.dto.request.UpdateLocationRequest;
import com.trafikkingx.ambulance.dto.response.AmbulanceLocationResponse;
import com.trafikkingx.ambulance.dto.response.AmbulanceResponse;
import com.trafikkingx.ambulance.service.AmbulanceService;
import com.trafikkingx.common.response.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/ambulances")
@RequiredArgsConstructor
public class AmbulanceController {

    private final AmbulanceService ambulanceService;

    @PostMapping
    public ApiResponse<AmbulanceResponse> createAmbulance(
            @Valid @RequestBody CreateAmbulanceRequest request) {

        AmbulanceResponse response =
                ambulanceService.createAmbulance(request);

        return ApiResponse.<AmbulanceResponse>builder()
                .success(true)
                .message("Ambulance created successfully")
                .data(response)
                .build();
    }

    @GetMapping
    public ApiResponse<List<AmbulanceResponse>> getAllAmbulances() {

        List<AmbulanceResponse> response =
                ambulanceService.getAllAmbulances();

        return ApiResponse.<List<AmbulanceResponse>>builder()
                .success(true)
                .message("Ambulances fetched successfully")
                .data(response)
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse<AmbulanceResponse> getAmbulanceById(
            @PathVariable Long id) {

        AmbulanceResponse response =
                ambulanceService.getAmbulanceById(id);

        return ApiResponse.<AmbulanceResponse>builder()
                .success(true)
                .message("Ambulance fetched successfully")
                .data(response)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<AmbulanceResponse> updateAmbulance(
            @PathVariable Long id,
            @Valid @RequestBody UpdateAmbulanceRequest request) {

        AmbulanceResponse response =
                ambulanceService.updateAmbulance(id, request);

        return ApiResponse.<AmbulanceResponse>builder()
                .success(true)
                .message("Ambulance updated successfully")
                .data(response)
                .build();
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> deleteAmbulance(
            @PathVariable Long id) {

        ambulanceService.deleteAmbulance(id);

        return ApiResponse.<Void>builder()
                .success(true)
                .message("Ambulance deleted successfully")
                .build();
    }
    @PatchMapping("/{ambulanceId}/location")
public ApiResponse<AmbulanceLocationResponse> updateLocation(

        @PathVariable Long ambulanceId,

        @Valid
        @RequestBody
        UpdateLocationRequest request) {

    return ApiResponse
            .<AmbulanceLocationResponse>builder()
            .success(true)
            .message("Ambulance location updated successfully.")
            .data(
                    ambulanceService.updateLocation(
                            ambulanceId,
                            request
                    )
            )
            .build();
}
}
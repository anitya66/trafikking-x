package com.trafikkingx.citizen.controller;

import com.trafikkingx.citizen.dto.request.CreateCitizenProfileRequest;
import com.trafikkingx.citizen.dto.request.UpdateCitizenProfileRequest;
import com.trafikkingx.citizen.dto.response.CitizenProfileResponse;
import com.trafikkingx.citizen.service.CitizenProfileService;
import com.trafikkingx.common.response.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/citizen/profile")
@RequiredArgsConstructor
public class CitizenProfileController {

    private final CitizenProfileService citizenProfileService;

    @PostMapping
    public ApiResponse<CitizenProfileResponse> createProfile(
            @Valid @RequestBody CreateCitizenProfileRequest request) {

        CitizenProfileResponse response =
                citizenProfileService.createProfile(request);

        return ApiResponse.<CitizenProfileResponse>builder()
                .success(true)
                .message("Citizen profile created successfully")
                .data(response)
                .build();
    }

    @GetMapping
    public ApiResponse<CitizenProfileResponse> getMyProfile() {

        CitizenProfileResponse response =
                citizenProfileService.getMyProfile();

        return ApiResponse.<CitizenProfileResponse>builder()
                .success(true)
                .message("Citizen profile fetched successfully")
                .data(response)
                .build();
    }

    @PutMapping
    public ApiResponse<CitizenProfileResponse> updateProfile(
            @Valid @RequestBody UpdateCitizenProfileRequest request) {

        CitizenProfileResponse response =
                citizenProfileService.updateProfile(request);

        return ApiResponse.<CitizenProfileResponse>builder()
                .success(true)
                .message("Citizen profile updated successfully")
                .data(response)
                .build();
    }
}
package com.trafikkingx.citizen.controller;

import com.trafikkingx.citizen.dto.response.CitizenProfileResponse;
import com.trafikkingx.citizen.service.CitizenProfileService;
import com.trafikkingx.common.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/citizens")
@RequiredArgsConstructor
public class CitizenManagementController {

    private final CitizenProfileService citizenProfileService;

    @GetMapping
    public ApiResponse<List<CitizenProfileResponse>> getAllCitizens() {

        return ApiResponse
                .<List<CitizenProfileResponse>>builder()
                .success(true)
                .message("Citizens fetched successfully.")
                .data(
                        citizenProfileService.getAllCitizens()
                )
                .build();

    }

    @GetMapping("/{id}")
    public ApiResponse<CitizenProfileResponse> getCitizenById(
            @PathVariable Long id
    ) {

        return ApiResponse
                .<CitizenProfileResponse>builder()
                .success(true)
                .message("Citizen fetched successfully.")
                .data(
                        citizenProfileService.getCitizenById(id)
                )
                .build();

    }

}
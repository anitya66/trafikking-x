package com.trafikkingx.hospital.controller;

import com.trafikkingx.common.pagination.PageResponse;
import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.hospital.dto.request.CreateHospitalRequest;
import com.trafikkingx.hospital.dto.request.UpdateHospitalRequest;
import com.trafikkingx.hospital.dto.response.HospitalResponse;
import com.trafikkingx.hospital.enums.HospitalType;
import com.trafikkingx.hospital.service.HospitalService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/hospitals")
@RequiredArgsConstructor
public class HospitalController {

    private final HospitalService hospitalService;

    @PostMapping
    public ApiResponse<HospitalResponse> createHospital(
            @Valid @RequestBody CreateHospitalRequest request) {

        HospitalResponse response =
                hospitalService.createHospital(request);

        return ApiResponse.<HospitalResponse>builder()
                .success(true)
                .message("Hospital created successfully")
                .data(response)
                .build();
    }

   @GetMapping
public ApiResponse<PageResponse<HospitalResponse>> getAllHospitals(

        @RequestParam(defaultValue = "0")
        int page,

        @RequestParam(defaultValue = "10")
        int size,

        @RequestParam(required = false)
        String city,

        @RequestParam(required = false)
        HospitalType type
) {

PageResponse<HospitalResponse> response =
        hospitalService.getAllHospitals(
                page,
                size,
                city,
                type
        );
        return ApiResponse.<PageResponse<HospitalResponse>>builder()
                .success(true)
                .message("Hospitals fetched successfully")
                .data(response)
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse<HospitalResponse> getHospitalById(
            @PathVariable Long id) {

        HospitalResponse response =
                hospitalService.getHospitalById(id);

        return ApiResponse.<HospitalResponse>builder()
                .success(true)
                .message("Hospital fetched successfully")
                .data(response)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<HospitalResponse> updateHospital(
            @PathVariable Long id,
            @Valid @RequestBody UpdateHospitalRequest request) {

        HospitalResponse response =
                hospitalService.updateHospital(id, request);

        return ApiResponse.<HospitalResponse>builder()
                .success(true)
                .message("Hospital updated successfully")
                .data(response)
                .build();
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> deleteHospital(
            @PathVariable Long id) {

        hospitalService.deleteHospital(id);

        return ApiResponse.<Void>builder()
                .success(true)
                .message("Hospital deleted successfully")
                .build();
    }
}
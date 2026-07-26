package com.trafikkingx.hospital.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.hospital.dto.request.UpdateHospitalCaseStatusRequest;
import com.trafikkingx.hospital.dto.response.HospitalCaseResponse;
import com.trafikkingx.hospital.service.HospitalCaseHistoryService;
import com.trafikkingx.hospital.service.HospitalCaseService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/hospital-cases")
@RequiredArgsConstructor
public class HospitalCaseController {

    private final HospitalCaseHistoryService
            hospitalCaseHistoryService;

    private final HospitalCaseService
            hospitalCaseService;

    @GetMapping("/history")
    public ApiResponse<List<HospitalCaseResponse>>
    getHistory() {

        return ApiResponse
                .<List<HospitalCaseResponse>>builder()
                .success(true)
                .message("Hospital history fetched successfully")
                .data(
                        hospitalCaseHistoryService.getHistory()
                )
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse<HospitalCaseResponse>
    getHospitalCase(
            @PathVariable Long id
    ) {

        return ApiResponse
                .<HospitalCaseResponse>builder()
                .success(true)
                .message("Hospital case fetched successfully")
                .data(
                        hospitalCaseService.getHospitalCase(id)
                )
                .build();
    }

    @PutMapping("/{id}/status")
    public ApiResponse<HospitalCaseResponse>
    updateStatus(

            @PathVariable Long id,

            @Valid
            @RequestBody
            UpdateHospitalCaseStatusRequest request

    ) {

        return ApiResponse
                .<HospitalCaseResponse>builder()
                .success(true)
                .message("Hospital case updated successfully")
                .data(
                        hospitalCaseService.updateStatus(
                                id,
                                request
                        )
                )
                .build();
    }

}
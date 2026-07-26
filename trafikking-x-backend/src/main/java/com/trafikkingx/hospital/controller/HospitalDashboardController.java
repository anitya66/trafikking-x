package com.trafikkingx.hospital.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.hospital.dto.response.HospitalDashboardDataResponse;
import com.trafikkingx.hospital.dto.response.HospitalDashboardResponse;
import com.trafikkingx.hospital.service.HospitalDashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/hospitals/dashboard")
@RequiredArgsConstructor
public class HospitalDashboardController {

    private final HospitalDashboardService hospitalDashboardService;

    @GetMapping
public ApiResponse<HospitalDashboardDataResponse> getDashboardData() {

    HospitalDashboardDataResponse response =
            hospitalDashboardService.getDashboardData();

    return ApiResponse.<HospitalDashboardDataResponse>builder()
            .success(true)
            .message("Hospital dashboard fetched successfully")
            .data(response)
            .build();
}

}
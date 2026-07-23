package com.trafikkingx.dashboard.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.dashboard.dto.response.DashboardSummaryResponse;
import com.trafikkingx.dashboard.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.trafikkingx.incident.dto.response.IncidentResponse;

import java.util.List;

@RestController
@RequestMapping("/api/v1/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping("/summary")
    public ApiResponse<DashboardSummaryResponse> getDashboardSummary() {

        DashboardSummaryResponse response =
                dashboardService.getDashboardSummary();

        return ApiResponse.<DashboardSummaryResponse>builder()
                .success(true)
                .message("Dashboard summary fetched successfully")
                .data(response)
                .build();
    }

    @GetMapping("/recent-incidents")
public ApiResponse<List<IncidentResponse>> getRecentIncidents() {

    List<IncidentResponse> response =
            dashboardService.getRecentIncidents();

    return ApiResponse.<List<IncidentResponse>>builder()
            .success(true)
            .message("Recent incidents fetched successfully")
            .data(response)
            .build();
}
}
package com.trafikkingx.police.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.police.dto.response.PoliceDashboardResponse;
import com.trafikkingx.police.service.PoliceDashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/police")
@RequiredArgsConstructor
public class PoliceDashboardController {

    private final PoliceDashboardService
            policeDashboardService;

    @GetMapping("/dashboard")
    public ApiResponse<PoliceDashboardResponse>
    getDashboard() {

        return ApiResponse
                .<PoliceDashboardResponse>builder()
                .success(true)
                .message(
                        "Police dashboard fetched successfully"
                )
                .data(
                        policeDashboardService.getDashboard()
                )
                .build();
    }

}
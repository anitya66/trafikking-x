package com.trafikkingx.map.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.map.dto.response.MapOverviewResponse;
import com.trafikkingx.map.service.MapService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/map")
@RequiredArgsConstructor
public class MapController {

    private final MapService mapService;

    @GetMapping("/overview")
    public ApiResponse<MapOverviewResponse> getMapOverview() {

        MapOverviewResponse response =
                mapService.getMapOverview();

        return ApiResponse.<MapOverviewResponse>builder()
                .success(true)
                .message("Map overview fetched successfully")
                .data(response)
                .build();
    }
}
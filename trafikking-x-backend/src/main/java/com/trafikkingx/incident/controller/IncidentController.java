package com.trafikkingx.incident.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.incident.dto.request.CreateIncidentRequest;
import com.trafikkingx.incident.dto.request.UpdateIncidentRequest;
import com.trafikkingx.incident.dto.response.IncidentResponse;
import com.trafikkingx.incident.service.IncidentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/incidents")
@RequiredArgsConstructor
public class IncidentController {

    private final IncidentService incidentService;

    @PostMapping
    public ApiResponse<IncidentResponse> createIncident(
            @Valid @RequestBody CreateIncidentRequest request) {

        IncidentResponse response =
                incidentService.createIncident(request);

        return ApiResponse.<IncidentResponse>builder()
                .success(true)
                .message("Incident reported successfully")
                .data(response)
                .build();
    }

    @GetMapping
    public ApiResponse<List<IncidentResponse>> getMyIncidents() {

        List<IncidentResponse> response =
                incidentService.getMyIncidents();

        return ApiResponse.<List<IncidentResponse>>builder()
                .success(true)
                .message("Incidents fetched successfully")
                .data(response)
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse<IncidentResponse> getIncidentById(
            @PathVariable Long id) {

        IncidentResponse response =
                incidentService.getIncidentById(id);

        return ApiResponse.<IncidentResponse>builder()
                .success(true)
                .message("Incident fetched successfully")
                .data(response)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<IncidentResponse> updateIncident(
            @PathVariable Long id,
            @Valid @RequestBody UpdateIncidentRequest request) {

        IncidentResponse response =
                incidentService.updateIncident(id, request);

        return ApiResponse.<IncidentResponse>builder()
                .success(true)
                .message("Incident updated successfully")
                .data(response)
                .build();
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> deleteIncident(
            @PathVariable Long id) {

        incidentService.deleteIncident(id);

        return ApiResponse.<Void>builder()
                .success(true)
                .message("Incident deleted successfully")
                .build();
    }
}
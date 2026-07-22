package com.trafikkingx.assignment.controller;

import com.trafikkingx.assignment.dto.response.AssignmentResponse;
import com.trafikkingx.assignment.service.AssignmentEngineService;
import com.trafikkingx.common.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/assignments")
public class AssignmentController {

    private final AssignmentEngineService assignmentEngineService;

    @PostMapping("/auto/{incidentId}")
    public ApiResponse<AssignmentResponse> autoAssign(
            @PathVariable Long incidentId) {

        return ApiResponse.<AssignmentResponse>builder()
                .success(true)
                .message("Resources assigned successfully.")
                .data(
                        assignmentEngineService.autoAssign(
                                incidentId
                        )
                )
                .build();
    }
}
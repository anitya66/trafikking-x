package com.trafikkingx.ai.controller;

import com.trafikkingx.ai.service.AIRecommendationService;
import com.trafikkingx.assignment.dto.response.AssignmentResponse;
import com.trafikkingx.common.response.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/ai")
@RequiredArgsConstructor
public class AIRecommendationController {

    private final AIRecommendationService aiRecommendationService;

    @Operation(summary = "Get AI Recommendation")
    @GetMapping("/recommendation/{incidentId}")
    public ApiResponse<AssignmentResponse> getRecommendation(
            @PathVariable Long incidentId
    ) {

        return ApiResponse.<AssignmentResponse>builder()
                .success(true)
                .message("AI recommendation generated successfully.")
                .data(
                        aiRecommendationService
                                .getRecommendation(
                                        incidentId
                                )
                )
                .build();
    }
}
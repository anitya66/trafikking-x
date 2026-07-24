package com.trafikkingx.ai.service;

import com.trafikkingx.assignment.dto.response.AssignmentResponse;

public interface AIRecommendationService {

    AssignmentResponse getRecommendation(
            Long incidentId
    );

}
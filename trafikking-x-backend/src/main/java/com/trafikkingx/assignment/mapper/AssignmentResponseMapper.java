package com.trafikkingx.assignment.mapper;

import com.trafikkingx.assignment.dto.response.AssignmentResponse;
import com.trafikkingx.recommendation.model.RecommendationResult;

public interface AssignmentResponseMapper {

    AssignmentResponse toResponse(
            RecommendationResult recommendation
    );

}
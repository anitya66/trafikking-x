package com.trafikkingx.recommendation.mapper;

import com.trafikkingx.recommendation.dto.AIRecommendationResponse;
import com.trafikkingx.recommendation.model.RecommendationResult;

/**
 * Converts Recommendation domain objects into REST DTOs.
 *
 * This mapper belongs to the presentation boundary.
 * It must never contain business logic.
 */
public interface RecommendationMapper {

    AIRecommendationResponse toResponse(
            RecommendationResult result
    );

}
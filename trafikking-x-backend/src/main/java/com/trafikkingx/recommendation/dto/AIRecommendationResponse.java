package com.trafikkingx.recommendation.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * Response returned by the Recommendation Engine.
 *
 * This DTO is intentionally read-only.
 * No Assignment is created while generating recommendations.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AIRecommendationResponse {

    /**
     * Incident identifier.
     */
    private Long incidentId;

    /**
     * Recommendation generation timestamp.
     */
    private String generatedAt;

    /**
     * Recommended resources ordered by score.
     */
    @Builder.Default
    private List<ResourceRecommendation> recommendations = new ArrayList<>();
}
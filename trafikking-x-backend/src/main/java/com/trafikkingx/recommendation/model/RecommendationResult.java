package com.trafikkingx.recommendation.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Internal Recommendation Engine result.
 *
 * This object is shared between:
 * - Recommendation API
 * - Assignment Engine
 *
 * It contains NO persistence logic
 * and NO REST concerns.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecommendationResult {

    private Long incidentId;

    private RecommendedResource hospital;

    private RecommendedResource ambulance;

    private RecommendedResource police;

}
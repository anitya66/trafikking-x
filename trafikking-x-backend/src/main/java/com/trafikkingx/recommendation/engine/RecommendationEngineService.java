package com.trafikkingx.recommendation.engine;

import com.trafikkingx.recommendation.model.RecommendationResult;

/**
 * Core Recommendation Engine.
 *
 * Responsibilities:
 * - Find best resources
 * - Score resources
 * - Never persist data
 * - Never return REST DTOs
 */
public interface RecommendationEngineService {

    RecommendationResult generateRecommendation(
            Long incidentId
    );

}
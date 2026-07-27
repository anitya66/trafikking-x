package com.trafikkingx.ai.service;

import com.trafikkingx.recommendation.dto.AIRecommendationResponse;

/**
 * AI Recommendation Service
 *
 * Generates resource recommendations only.
 *
 * This service MUST NEVER:
 * - Create assignments
 * - Persist data
 * - Publish events
 * - Send notifications
 */
public interface AIRecommendationService {

    AIRecommendationResponse getRecommendation(
            Long incidentId
    );

}
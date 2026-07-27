package com.trafikkingx.recommendation.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents a single recommended resource returned by the
 * Recommendation Engine.
 *
 * This DTO is READ-ONLY.
 * It never represents a persisted Assignment.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResourceRecommendation {

    /**
     * Resource identifier.
     */
    private Long resourceId;

    /**
     * Resource type.
     * Example:
     * AMBULANCE
     * HOSPITAL
     * POLICE
     */
    private String resourceType;

    /**
     * Display name.
     */
    private String resourceName;

    /**
     * Distance from incident (KM).
     */
    private Double distanceKm;

    /**
     * AI/Scoring confidence.
     */
    private Double score;

    /**
     * Estimated arrival time.
     */
    private Integer etaMinutes;

    /**
     * Explanation shown to dispatcher.
     */
    private String reason;

}
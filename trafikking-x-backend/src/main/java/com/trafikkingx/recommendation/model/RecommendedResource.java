package com.trafikkingx.recommendation.model;

import com.trafikkingx.assignment.enums.ResourceType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Domain model representing a recommended emergency resource.
 *
 * This class belongs to the Recommendation domain.
 * It is NOT a JPA entity.
 * It is NOT a REST DTO.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecommendedResource {

    /**
     * Resource identifier.
     */
    private Long id;

    /**
     * Resource type.
     */
    private ResourceType resourceType;

    /**
     * Display name.
     */
    private String name;

    /**
     * Distance from incident (km).
     */
    private Double distance;

    /**
     * AI recommendation score.
     */
    private Double score;

    /**
     * Estimated arrival time.
     */
    private Integer etaMinutes;

    /**
     * Human-readable explanation.
     */
    private String reason;

}
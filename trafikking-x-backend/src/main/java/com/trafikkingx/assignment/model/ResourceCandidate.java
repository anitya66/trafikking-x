package com.trafikkingx.assignment.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResourceCandidate {

    /**
     * Resource ID
     */
    private Long id;

    /**
     * Resource Name
     * Example:
     * AIIMS Patna
     * Ambulance BR01AA1234
     * Patliputra Police Station
     */
    private String name;

    /**
     * Distance from Incident (KM)
     */
    private Double distance;

    /**
     * AI/Algorithm Score
     * Current Version:
     * Score = Distance
     *
     * Future:
     * Score = AI Prediction
     */
    private Double score;
}
package com.trafikkingx.assignment.scoring;

import com.trafikkingx.assignment.model.ResourceCandidate;

public interface ResourceScoringService {

    /**
     * Calculates the final score of a resource.
     *
     * Current Version:
     * score = distance
     *
     * Future Versions:
     * score =
     * distance +
     * traffic +
     * hospital load +
     * weather +
     * AI prediction
     *
     * @param candidate ResourceCandidate
     * @return calculated score
     */
    double calculateScore(ResourceCandidate candidate);

}
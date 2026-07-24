package com.trafikkingx.assignment.scoring.impl;

import com.trafikkingx.assignment.model.ResourceCandidate;
import com.trafikkingx.assignment.scoring.ResourceScoringService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class ResourceScoringServiceImpl
        implements ResourceScoringService {

@Override
public double calculateScore(
        ResourceCandidate candidate) {

    log.debug(
            "Calculating score for resource {}",
            candidate.getName()
    );

    double distance = candidate.getDistance();

    /*
     * Version 2
     *
     * Higher score = Better recommendation
     */

    double score = 100 - (distance * 10);

    return Math.max(score, 10);
}
}
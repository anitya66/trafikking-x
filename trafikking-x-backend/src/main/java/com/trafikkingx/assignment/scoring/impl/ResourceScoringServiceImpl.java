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

        /*
         * Version 1
         *
         * Score = Distance
         */

        return candidate.getDistance();
    }
}
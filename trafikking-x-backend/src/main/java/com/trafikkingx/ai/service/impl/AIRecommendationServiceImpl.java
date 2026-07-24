package com.trafikkingx.ai.service.impl;

import com.trafikkingx.ai.service.AIRecommendationService;
import com.trafikkingx.assignment.dto.response.AssignmentResponse;
import com.trafikkingx.assignment.service.AssignmentEngineService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AIRecommendationServiceImpl
        implements AIRecommendationService {

    private final AssignmentEngineService assignmentEngineService;

    @Override
    public AssignmentResponse getRecommendation(
            Long incidentId
    ) {

        log.info(
                "Generating AI recommendation for incident {}",
                incidentId
        );

        return assignmentEngineService.autoAssign(
                incidentId
        );
    }
}
package com.trafikkingx.ai.service.impl;

import com.trafikkingx.ai.service.AIRecommendationService;
import com.trafikkingx.recommendation.dto.AIRecommendationResponse;
import com.trafikkingx.recommendation.engine.RecommendationEngineService;
import com.trafikkingx.recommendation.mapper.RecommendationMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AIRecommendationServiceImpl
        implements AIRecommendationService {

    private final RecommendationEngineService recommendationEngineService;

    private final RecommendationMapper recommendationMapper;

    @Override
    public AIRecommendationResponse getRecommendation(
            Long incidentId
    ) {

        return recommendationMapper.toResponse(
                recommendationEngineService.generateRecommendation(
                        incidentId
                )
        );
    }

}
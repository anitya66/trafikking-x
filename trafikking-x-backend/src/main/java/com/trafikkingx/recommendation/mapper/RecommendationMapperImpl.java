package com.trafikkingx.recommendation.mapper;

import com.trafikkingx.recommendation.dto.AIRecommendationResponse;
import com.trafikkingx.recommendation.dto.ResourceRecommendation;
import com.trafikkingx.recommendation.model.RecommendationResult;
import com.trafikkingx.recommendation.model.RecommendedResource;
import org.springframework.stereotype.Component;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Component
public class RecommendationMapperImpl
        implements RecommendationMapper {

    @Override
    public AIRecommendationResponse toResponse(
            RecommendationResult result
    ) {

        List<ResourceRecommendation> recommendations =
                new ArrayList<>();

        addRecommendation(
                recommendations,
                "AMBULANCE",
                result.getAmbulance()
        );

        addRecommendation(
                recommendations,
                "HOSPITAL",
                result.getHospital()
        );

        addRecommendation(
                recommendations,
                "POLICE",
                result.getPolice()
        );

        recommendations.sort(
                Comparator.comparing(
                        ResourceRecommendation::getScore
                ).reversed()
        );

        return AIRecommendationResponse.builder()
                .incidentId(result.getIncidentId())
                .generatedAt(OffsetDateTime.now().toString())
                .recommendations(recommendations)
                .build();
    }

    private void addRecommendation(
            List<ResourceRecommendation> recommendations,
            String type,
            RecommendedResource resource
    ) {

        if (resource == null) {
            return;
        }

        recommendations.add(
                ResourceRecommendation.builder()
        .resourceId(resource.getId())
        .resourceType(type)
        .resourceName(resource.getName())
        .distanceKm(
                resource.getDistance()
        )
        .score(resource.getScore())
        .etaMinutes(resource.getEtaMinutes())
        .reason(resource.getReason())
        .build()
        );
    }

}
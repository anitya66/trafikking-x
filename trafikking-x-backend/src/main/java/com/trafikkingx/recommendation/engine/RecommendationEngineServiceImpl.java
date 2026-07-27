package com.trafikkingx.recommendation.engine;

import com.trafikkingx.assignment.enums.ResourceType;
import com.trafikkingx.assignment.model.ResourceCandidate;
import com.trafikkingx.assignment.scoring.ResourceScoringService;
import com.trafikkingx.assignment.strategy.AssignmentStrategy;
import com.trafikkingx.common.exception.custom.IncidentNotFoundException;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.incident.repository.IncidentRepository;
import com.trafikkingx.recommendation.model.RecommendationResult;
import com.trafikkingx.recommendation.model.RecommendedResource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.EnumMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class RecommendationEngineServiceImpl
        implements RecommendationEngineService {

    private final IncidentRepository incidentRepository;

    private final ResourceScoringService scoringService;

    private final Map<ResourceType, AssignmentStrategy> strategyMap;

    public RecommendationEngineServiceImpl(
            IncidentRepository incidentRepository,
            ResourceScoringService scoringService,
            List<AssignmentStrategy> strategies
    ) {

        this.incidentRepository = incidentRepository;
        this.scoringService = scoringService;

        this.strategyMap = new EnumMap<>(ResourceType.class);

        for (AssignmentStrategy strategy : strategies) {
            this.strategyMap.put(
                    strategy.getResourceType(),
                    strategy
            );
        }
    }

    @Override
    public RecommendationResult generateRecommendation(
            Long incidentId
    ) {

        log.info(
                "Generating recommendations for incident {}",
                incidentId
        );

        Incident incident = incidentRepository
                .findById(incidentId)
                .orElseThrow(
                        IncidentNotFoundException::new
                );

        RecommendedResource hospital =
                findCandidate(
                        ResourceType.HOSPITAL,
                        incident
                );

        RecommendedResource ambulance =
                findCandidate(
                        ResourceType.AMBULANCE,
                        incident
                );

        RecommendedResource police =
                findCandidate(
                        ResourceType.POLICE,
                        incident
                );

        return RecommendationResult.builder()
                .incidentId(incidentId)
                .hospital(hospital)
                .ambulance(ambulance)
                .police(police)
                .build();
    }

    /**
     * Finds and scores the best available resource.
     * This method performs NO database writes.
     */
    private RecommendedResource findCandidate(
            ResourceType type,
            Incident incident
    ) {

        AssignmentStrategy strategy =
                strategyMap.get(type);

        if (strategy == null) {
            return null;
        }

        ResourceCandidate candidate =
                strategy.findBestResource(incident);

        if (candidate == null) {
            return null;
        }

        double score =
                scoringService.calculateScore(candidate);

        candidate.setScore(score);

        return RecommendedResource.builder()
                .id(candidate.getId())
                .resourceType(type)
                .name(candidate.getName())
                .distance(candidate.getDistance())
                .score(score)
                .etaMinutes(
                        calculateEta(candidate.getDistance())
                )
                .reason(
                        buildReason(type)
                )
                .build();
    }

    /**
     * Calculates estimated arrival time in minutes.
     */
    private Integer calculateEta(
            Double distance
    ) {

        if (distance == null) {
            return null;
        }

        return Math.max(
                1,
                (int) Math.ceil(distance * 2)
        );
    }

    /**
     * Generates dispatcher-friendly recommendation reason.
     */
    private String buildReason(
            ResourceType type
    ) {

        return switch (type) {

            case AMBULANCE ->
                    "Closest available ambulance selected using AI scoring.";

            case HOSPITAL ->
                    "Nearest available hospital selected using AI scoring.";

            case POLICE ->
                    "Nearest active police station selected using AI scoring.";
        };
    }

}
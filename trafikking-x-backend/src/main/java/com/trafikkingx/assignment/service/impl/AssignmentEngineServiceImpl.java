package com.trafikkingx.assignment.service.impl;

import com.trafikkingx.assignment.dto.response.AssignmentResponse;
import com.trafikkingx.assignment.enums.ResourceType;
import com.trafikkingx.assignment.model.ResourceCandidate;
import com.trafikkingx.assignment.scoring.ResourceScoringService;
import com.trafikkingx.assignment.service.AssignmentEngineService;
import com.trafikkingx.assignment.strategy.AssignmentStrategy;
import com.trafikkingx.common.exception.custom.IncidentNotFoundException;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.incident.repository.IncidentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.EnumMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class AssignmentEngineServiceImpl
        implements AssignmentEngineService {

    private final IncidentRepository incidentRepository;

    private final ResourceScoringService scoringService;

    private final Map<ResourceType, AssignmentStrategy> strategyMap;

    public AssignmentEngineServiceImpl(
            IncidentRepository incidentRepository,
            ResourceScoringService scoringService,
            List<AssignmentStrategy> strategies) {

        this.incidentRepository = incidentRepository;
        this.scoringService = scoringService;

        this.strategyMap = new EnumMap<>(ResourceType.class);

        for (AssignmentStrategy strategy : strategies) {
            strategyMap.put(
                    strategy.getResourceType(),
                    strategy
            );
        }
    }

    private Incident getIncident(Long incidentId) {

        return incidentRepository.findById(incidentId)
                .orElseThrow(
                        IncidentNotFoundException::new
                );
    }

    @Override
    @Transactional(readOnly = true)
    public AssignmentResponse autoAssign(Long incidentId) {

        log.info(
                "Starting automatic assignment for incident {}",
                incidentId
        );

        Incident incident = getIncident(incidentId);

        ResourceCandidate hospital =
                strategyMap
                        .get(ResourceType.HOSPITAL)
                        .findBestResource(incident);

        ResourceCandidate ambulance =
                strategyMap
                        .get(ResourceType.AMBULANCE)
                        .findBestResource(incident);

        ResourceCandidate police =
                strategyMap
                        .get(ResourceType.POLICE)
                        .findBestResource(incident);

        if (hospital != null) {
            hospital.setScore(
                    scoringService.calculateScore(hospital)
            );
        }

        if (ambulance != null) {
            ambulance.setScore(
                    scoringService.calculateScore(ambulance)
            );
        }

        if (police != null) {
            police.setScore(
                    scoringService.calculateScore(police)
            );
        }

        log.info(
                "Automatic assignment completed successfully."
        );

        return AssignmentResponse.builder()
                .incidentId(incidentId)

                .hospitalId(
                        hospital != null ? hospital.getId() : null
                )
                .hospitalName(
                        hospital != null ? hospital.getName() : null
                )
                .hospitalDistance(
                        hospital != null ? hospital.getDistance() : null
                )

                .ambulanceId(
                        ambulance != null ? ambulance.getId() : null
                )
                .vehicleNumber(
                        ambulance != null ? ambulance.getName() : null
                )
                .ambulanceDistance(
                        ambulance != null ? ambulance.getDistance() : null
                )

                .policeStationId(
                        police != null ? police.getId() : null
                )
                .policeStationName(
                        police != null ? police.getName() : null
                )
                .policeDistance(
                        police != null ? police.getDistance() : null
                )

                .build();
    }
}
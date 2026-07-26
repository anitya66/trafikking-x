package com.trafikkingx.assignment.service.impl;

import com.trafikkingx.assignment.dto.response.AssignmentResponse;
import com.trafikkingx.assignment.entity.Assignment;
import com.trafikkingx.assignment.enums.AssignmentStatus;
import com.trafikkingx.assignment.enums.ResourceType;
import com.trafikkingx.assignment.model.ResourceCandidate;
import com.trafikkingx.assignment.repository.AssignmentRepository;
import com.trafikkingx.assignment.scoring.ResourceScoringService;
import com.trafikkingx.assignment.service.AssignmentEngineService;
import com.trafikkingx.assignment.strategy.AssignmentStrategy;
import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.ambulance.repository.AmbulanceRepository;
import com.trafikkingx.auth.entity.User;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.common.exception.custom.AmbulanceNotFoundException;
import com.trafikkingx.common.exception.custom.IncidentNotFoundException;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.incident.repository.IncidentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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

    private final AssignmentRepository assignmentRepository;

    private final AmbulanceRepository ambulanceRepository;

    private final UserRepository userRepository;

    public AssignmentEngineServiceImpl(

            IncidentRepository incidentRepository,

            ResourceScoringService scoringService,

            List<AssignmentStrategy> strategies,

            AssignmentRepository assignmentRepository,

            AmbulanceRepository ambulanceRepository,

            UserRepository userRepository

    ) {

        this.incidentRepository = incidentRepository;

        this.scoringService = scoringService;

        this.assignmentRepository = assignmentRepository;

        this.ambulanceRepository = ambulanceRepository;

        this.userRepository = userRepository;

        this.strategyMap = new EnumMap<>(ResourceType.class);

        for (AssignmentStrategy strategy : strategies) {

            strategyMap.put(
                    strategy.getResourceType(),
                    strategy
            );

        }

    }

    private Incident getIncident(Long incidentId) {

        return incidentRepository
                .findById(incidentId)
                .orElseThrow(
                        IncidentNotFoundException::new
                );

    }

    private User getCurrentDispatcher() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return userRepository
                .findByEmail(email)
                .orElseThrow(
                        () -> new UsernameNotFoundException(
                                "User not found."
                        )
                );

    }

    private Ambulance getAmbulance(
            Long ambulanceId
    ) {

        return ambulanceRepository
                .findById(ambulanceId)
                .orElseThrow(
                        AmbulanceNotFoundException::new
                );

    }

    @Override
    @Transactional
    public AssignmentResponse autoAssign(
            Long incidentId
    ) {

        log.info(
                "Starting automatic assignment for incident {}",
                incidentId
        );

        Incident incident =
                getIncident(incidentId);

        if (assignmentRepository.existsByIncident(incident)) {

            throw new IllegalStateException(
                    "Resources already assigned for this incident."
            );

        }

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
                    scoringService.calculateScore(
                            hospital
                    )
            );

        }

        if (ambulance != null) {

            ambulance.setScore(
                    scoringService.calculateScore(
                            ambulance
                    )
            );

            Ambulance ambulanceEntity =
                    getAmbulance(
                            ambulance.getId()
                    );

            Assignment assignment =
                    Assignment.builder()
                            .incident(incident)
                            .ambulance(ambulanceEntity)
                            .dispatcher(getCurrentDispatcher())
                            .status(AssignmentStatus.PENDING)
                            .build();

            assignmentRepository.save(
                    assignment
            );

            log.info(
                    "Assignment {} created successfully.",
                    assignment.getId()
            );

        }

        if (police != null) {

            police.setScore(
                    scoringService.calculateScore(
                            police
                    )
            );

        }

        log.info(
                "Automatic assignment completed successfully."
        );

        return AssignmentResponse.builder()

                .incidentId(
                        incidentId
                )

                // Hospital

                .hospitalId(
                        hospital != null
                                ? hospital.getId()
                                : null
                )

                .hospitalName(
                        hospital != null
                                ? hospital.getName()
                                : null
                )

                .hospitalDistance(
                        hospital != null
                                ? hospital.getDistance()
                                : null
                )

                .hospitalEtaMinutes(
                        hospital != null
                                ? Math.max(
                                2,
                                (int) Math.ceil(
                                        hospital.getDistance() * 2
                                )
                        )
                                : null
                )

                .hospitalConfidence(
                        hospital != null
                                ? Math.min(
                                99,
                                hospital.getScore().intValue()
                        )
                                : null
                )

                .hospitalReason(
                        hospital != null
                                ? "Nearest available hospital selected based on AI resource scoring."
                                : null
                )

                // Ambulance

                .ambulanceId(
                        ambulance != null
                                ? ambulance.getId()
                                : null
                )

                .vehicleNumber(
                        ambulance != null
                                ? ambulance.getName()
                                : null
                )

                .ambulanceDistance(
                        ambulance != null
                                ? ambulance.getDistance()
                                : null
                )

                .ambulanceEtaMinutes(
                        ambulance != null
                                ? Math.max(
                                1,
                                (int) Math.ceil(
                                        ambulance.getDistance() * 2
                                )
                        )
                                : null
                )

                .ambulanceConfidence(
                        ambulance != null
                                ? Math.min(
                                99,
                                ambulance.getScore().intValue()
                        )
                                : null
                )

                .ambulanceReason(
                        ambulance != null
                                ? "Closest available ambulance with the highest assignment score."
                                : null
                )

                              // Police

                .policeStationId(
                        police != null
                                ? police.getId()
                                : null
                )

                .policeStationName(
                        police != null
                                ? police.getName()
                                : null
                )

                .policeDistance(
                        police != null
                                ? police.getDistance()
                                : null
                )

                .policeEtaMinutes(
                        police != null
                                ? Math.max(
                                2,
                                (int) Math.ceil(
                                        police.getDistance() * 2
                                )
                        )
                                : null
                )

                .policeConfidence(
                        police != null
                                ? Math.min(
                                99,
                                police.getScore().intValue()
                        )
                                : null
                )

                .policeReason(
                        police != null
                                ? "Nearest active police station selected using AI scoring."
                                : null
                )

                .build();

    }

}
package com.trafikkingx.assignment.service.impl;

import com.trafikkingx.assignment.dto.internal.AssignmentCreationResult;
import com.trafikkingx.assignment.dto.request.CreateAssignmentRequest;
import com.trafikkingx.assignment.dto.response.AssignmentResponse;
import com.trafikkingx.assignment.entity.Assignment;
import com.trafikkingx.assignment.enums.AssignmentStatus;
import com.trafikkingx.assignment.mapper.AssignmentResponseMapper;
import com.trafikkingx.assignment.repository.AssignmentRepository;
import com.trafikkingx.assignment.service.AssignmentEngineService;
import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.ambulance.repository.AmbulanceRepository;
import com.trafikkingx.auth.entity.User;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.common.exception.custom.AmbulanceNotFoundException;
import com.trafikkingx.common.exception.custom.IncidentNotFoundException;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.incident.repository.IncidentRepository;
import com.trafikkingx.recommendation.engine.RecommendationEngineService;
import com.trafikkingx.recommendation.model.RecommendationResult;
import com.trafikkingx.recommendation.model.RecommendedResource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
public class AssignmentEngineServiceImpl
        implements AssignmentEngineService {

    private final RecommendationEngineService recommendationEngineService;
    private final AssignmentRepository assignmentRepository;
    private final AmbulanceRepository ambulanceRepository;
    private final UserRepository userRepository;
    private final IncidentRepository incidentRepository;
    private final AssignmentResponseMapper assignmentResponseMapper;

    public AssignmentEngineServiceImpl(
            IncidentRepository incidentRepository,
            RecommendationEngineService recommendationEngineService,
            AssignmentRepository assignmentRepository,
            AmbulanceRepository ambulanceRepository,
            AssignmentResponseMapper assignmentResponseMapper,
            UserRepository userRepository
    ) {

        this.incidentRepository = incidentRepository;
        this.recommendationEngineService = recommendationEngineService;
        this.assignmentRepository = assignmentRepository;
        this.ambulanceRepository = ambulanceRepository;
        this.userRepository = userRepository;
        this.assignmentResponseMapper = assignmentResponseMapper;

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

    private Ambulance getAmbulance(Long ambulanceId) {

        return ambulanceRepository
                .findById(ambulanceId)
                .orElseThrow(
                        AmbulanceNotFoundException::new
                );

    }

    /**
     * Legacy method.
     * Will be removed after dispatcher approval workflow
     * completely replaces automatic assignment.
     */
    @Override
    @Transactional
    public AssignmentResponse autoAssign(Long incidentId) {

        log.info(
                "Starting automatic assignment for incident {}",
                incidentId
        );

        Incident incident =
                getIncident(incidentId);

        RecommendationResult recommendation =
                recommendationEngineService.generateRecommendation(
                        incidentId
                );

        RecommendedResource ambulance =
                recommendation.getAmbulance();

        if (ambulance != null) {

            User dispatcher =
                    getCurrentDispatcher();

            Ambulance ambulanceEntity =
                    getAmbulance(
                            ambulance.getId()
                    );

            Assignment assignment =
                    Assignment.builder()
                            .incident(incident)
                            .ambulance(ambulanceEntity)
                            .dispatcher(dispatcher)
                            .status(AssignmentStatus.PENDING)
                            .build();

            assignmentRepository.save(assignment);

        }

        return assignmentResponseMapper.toResponse(
                recommendation
        );

    }

    @Override
    @Transactional
    public AssignmentCreationResult createAssignment(
            CreateAssignmentRequest request
    ) {

        log.info(
                "Creating assignment for incident {}",
                request.getIncidentId()
        );

        Incident incident =
                getIncident(
                        request.getIncidentId()
                );

        if (assignmentRepository.existsByIncident(incident)) {

            throw new IllegalStateException(
                    "Resources already assigned for this incident."
            );

        }

        Ambulance ambulance =
                getAmbulance(
                        request.getAmbulanceId()
                );

        User dispatcher =
                getCurrentDispatcher();

        Assignment assignment =
                Assignment.builder()
                        .incident(incident)
                        .ambulance(ambulance)
                        .dispatcher(dispatcher)
                        .status(AssignmentStatus.PENDING)
                        .remarks(request.getRemarks())
                        .build();

        assignment =
                assignmentRepository.save(
                        assignment
                );

        log.info(
                "Assignment {} created successfully.",
                assignment.getId()
        );

        RecommendationResult recommendation =
                recommendationEngineService.generateRecommendation(
                        request.getIncidentId()
                );

        AssignmentResponse response =
                assignmentResponseMapper.toResponse(
                        recommendation
                );

        return AssignmentCreationResult.builder()
                .assignmentId(
                        assignment.getId()
                )
                .incidentId(
                        incident.getId()
                )
                .ambulanceId(
                        ambulance.getId()
                )
                .dispatcherId(
                        dispatcher.getId()
                )
                .response(
                        response
                )
                .recipientUserId(
                        ambulance.getUser()
                                 .getId())
                .build();

    }

}
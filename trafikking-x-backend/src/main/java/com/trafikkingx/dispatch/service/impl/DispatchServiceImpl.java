package com.trafikkingx.dispatch.service.impl;

import com.trafikkingx.dispatch.dto.request.*;
import com.trafikkingx.dispatch.dto.response.DispatchResponse;
import com.trafikkingx.dispatch.entity.Dispatch;
import com.trafikkingx.dispatch.enums.DispatchStatus;
import com.trafikkingx.dispatch.mapper.DispatchMapper;
import com.trafikkingx.dispatch.repository.DispatchRepository;
import com.trafikkingx.dispatch.service.DispatchService;
import com.trafikkingx.dispatch.validation.DispatchValidator;
import com.trafikkingx.incident.repository.IncidentRepository;
import com.trafikkingx.common.event.DispatchCreatedEvent;
import com.trafikkingx.common.exception.custom.*;
import com.trafikkingx.dispatch.workflow.DispatchStateMachine;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.ambulance.repository.AmbulanceRepository;

import com.trafikkingx.hospital.entity.Hospital;
import com.trafikkingx.hospital.repository.HospitalRepository;

import com.trafikkingx.police.entity.PoliceStation;
import com.trafikkingx.police.repository.PoliceStationRepository;

import java.time.LocalDateTime;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;
import com.trafikkingx.incident.entity.Incident;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class DispatchServiceImpl
        implements DispatchService {

    private final DispatchRepository dispatchRepository;

    private final DispatchMapper dispatchMapper;

    private final DispatchValidator dispatchValidator;

    private final IncidentRepository incidentRepository;

    private final HospitalRepository hospitalRepository;

    private final AmbulanceRepository ambulanceRepository;

    private final PoliceStationRepository policeStationRepository;

    private final ApplicationEventPublisher eventPublisher;   

    private Dispatch getDispatchEntity(Long id) {

        return dispatchRepository.findById(id)
                .orElseThrow(
                        DispatchNotFoundException::new
                );
    }

@Override
@Transactional
public DispatchResponse createDispatch(
        CreateDispatchRequest request) {

    log.info(
            "Creating dispatch for incident {}",
            request.getIncidentId()
    );

    dispatchValidator.validate(request);

    if (dispatchRepository.existsByIncidentId(
            request.getIncidentId())) {

        throw new DispatchAlreadyExistsException(
                request.getIncidentId()
        );
    }

    Incident incident =
            incidentRepository.findById(
                    request.getIncidentId()
            ).orElseThrow(IncidentNotFoundException::new);

    Dispatch dispatch =
            dispatchMapper.toEntity(request);

    dispatch.setIncident(incident);

    Dispatch savedDispatch =
            dispatchRepository.save(dispatch);

    eventPublisher.publishEvent(

        new DispatchCreatedEvent(

                savedDispatch.getId(),

                incident.getId()

        )
 
    );        

    log.info(
            "Dispatch {} created successfully",
            savedDispatch.getId()
    );

    return dispatchMapper.toResponse(savedDispatch);
}

@Override
@Transactional
public DispatchResponse assignResources(
        Long dispatchId,
        AssignResourcesRequest request) {

    log.info("Assigning resources to dispatch {}", dispatchId);

    Dispatch dispatch = getDispatchEntity(dispatchId);

    if (request.getHospitalId() != null) {

        Hospital hospital =
                hospitalRepository.findById(request.getHospitalId())
                        .orElseThrow(HospitalNotFoundException::new);

        dispatch.setHospital(hospital);
    }

    if (request.getAmbulanceId() != null) {

        Ambulance ambulance =
                ambulanceRepository.findById(request.getAmbulanceId())
                        .orElseThrow(AmbulanceNotFoundException::new);

        dispatch.setAmbulance(ambulance);
    }

    if (request.getPoliceStationId() != null) {

        PoliceStation policeStation =
                policeStationRepository.findById(request.getPoliceStationId())
                        .orElseThrow(PoliceStationNotFoundException::new);

        dispatch.setPoliceStation(policeStation);
    }

    dispatch.setStatus(
            DispatchStatus.RESOURCES_ASSIGNED
    );

    dispatch.setDispatchedAt(LocalDateTime.now());

    Dispatch updatedDispatch =
            dispatchRepository.save(dispatch);

    log.info(
            "Resources assigned to dispatch {}",
            updatedDispatch.getId()
    );

    return dispatchMapper.toResponse(updatedDispatch);
}


@Override
@Transactional
public DispatchResponse updateDispatchStatus(
        Long dispatchId,
        UpdateDispatchStatusRequest request) {

            
    Dispatch dispatch = getDispatchEntity(dispatchId);

    log.info(
        "Updating dispatch {} to status {}",
        dispatchId,
        request.getStatus()
);

    DispatchStateMachine.validateTransition(
        dispatch.getStatus(),
        request.getStatus()
);

dispatch.setStatus(request.getStatus());

  switch (request.getStatus()) {

    case DISPATCHED ->
            dispatch.setDispatchedAt(LocalDateTime.now());

    case RESPONDING ->
            dispatch.setAcceptedAt(LocalDateTime.now());

    case COMPLETED ->
            dispatch.setCompletedAt(LocalDateTime.now());

    case CANCELLED ->
            dispatch.setCancelledAt(LocalDateTime.now());

    default -> {
    }
}

    Dispatch updatedDispatch =
            dispatchRepository.save(dispatch);

    return dispatchMapper.toResponse(updatedDispatch);
}

@Override
@Transactional
public DispatchResponse completeDispatch(
        Long dispatchId,
        CompleteDispatchRequest request) {

    Dispatch dispatch = getDispatchEntity(dispatchId);

    dispatch.setStatus(DispatchStatus.COMPLETED);

    dispatch.setCompletedAt(LocalDateTime.now());

    dispatch.setDispatcherNotes(
            request.getDispatcherNotes()
    );

    Dispatch completedDispatch =
            dispatchRepository.save(dispatch);

    log.info(
            "Dispatch {} completed",
            completedDispatch.getId()
    );

    return dispatchMapper.toResponse(completedDispatch);
}

@Override
public DispatchResponse getDispatch(
        Long dispatchId) {

    log.info(
            "Fetching dispatch {}",
            dispatchId
    );

    Dispatch dispatch =
            getDispatchEntity(dispatchId);

    return dispatchMapper.toResponse(dispatch);
}

@Override
public DispatchResponse getDispatchByIncident(
        Long incidentId) {

    log.info(
        "Fetching dispatch for incident {}",
        incidentId
);        

    Dispatch dispatch =
            dispatchRepository.findByIncidentId(
                    incidentId
            ).orElseThrow(
                    DispatchNotFoundException::new
            );

    return dispatchMapper.toResponse(dispatch);
}

@Override
public List<DispatchResponse> getAllDispatches() {

    return dispatchRepository.findAll()
            .stream()
            .map(dispatchMapper::toResponse)
            .toList();
}
}
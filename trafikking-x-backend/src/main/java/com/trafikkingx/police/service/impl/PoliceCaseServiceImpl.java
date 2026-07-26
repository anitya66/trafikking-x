package com.trafikkingx.police.service.impl;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.common.exception.custom.PoliceStationNotFoundException;
import com.trafikkingx.dispatch.entity.Dispatch;
import com.trafikkingx.dispatch.enums.DispatchStatus;
import com.trafikkingx.dispatch.repository.DispatchRepository;
import com.trafikkingx.police.dto.request.AcceptPoliceCaseRequest;
import com.trafikkingx.police.dto.request.UpdatePoliceCaseStatusRequest;
import com.trafikkingx.police.dto.response.IncomingPoliceCaseResponse;
import com.trafikkingx.police.dto.response.PoliceCaseResponse;
import com.trafikkingx.police.entity.PoliceCase;
import com.trafikkingx.police.entity.PoliceStation;
import com.trafikkingx.police.enums.PoliceCaseStatus;
import com.trafikkingx.police.mapper.PoliceCaseMapper;
import com.trafikkingx.police.repository.PoliceCaseRepository;
import com.trafikkingx.police.repository.PoliceStationRepository;
import com.trafikkingx.police.service.PoliceCaseService;
import com.trafikkingx.security.currentuser.CurrentUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class PoliceCaseServiceImpl
        implements PoliceCaseService {

    private final DispatchRepository dispatchRepository;

    private final PoliceStationRepository policeStationRepository;

    private final PoliceCaseRepository policeCaseRepository;

    private final PoliceCaseMapper policeCaseMapper;

    private final CurrentUserService currentUserService;

    private PoliceStation getCurrentPoliceStation() {

        User currentUser =
                currentUserService.getCurrentUser();

        return policeStationRepository
                .findByUser(currentUser)
                .orElseThrow(
                        PoliceStationNotFoundException::new
                );

    }

    @Override
    public List<IncomingPoliceCaseResponse> getIncomingCases() {

        PoliceStation station =
                getCurrentPoliceStation();

        List<Dispatch> dispatches =
                dispatchRepository
                        .findByPoliceStationIdAndStatusInOrderByCreatedAtDesc(
                                station.getId(),
                                List.of(
                                        DispatchStatus.RESOURCES_ASSIGNED,
                                        DispatchStatus.DISPATCHED,
                                        DispatchStatus.RESPONDING,
                                        DispatchStatus.ON_SCENE
                                )
                        );

        return dispatches.stream()

                .map(dispatch ->

                        IncomingPoliceCaseResponse
                                .builder()

                                .dispatchId(
                                        dispatch.getId()
                                )

                                .incidentNumber(
                                        dispatch.getIncident()
                                                .getIncidentNumber()
                                )

                                .citizenName(
                                        dispatch.getIncident()
                                                .getCitizenProfile()
                                                .getUser()
                                                .getFullName()
                                )

                                .incidentType(
                                        dispatch.getIncident()
                                                .getIncidentType()
                                                .name()
                                )

                                .severity(
                                        dispatch.getIncident()
                                                .getSeverity()
                                                .name()
                                )

                                .etaMinutes(5)

                                .build()

                )

                .toList();

    }

    @Override
    @Transactional
    public PoliceCaseResponse acceptCase(
            Long dispatchId,
            AcceptPoliceCaseRequest request
    ) {

        Dispatch dispatch =
                dispatchRepository.findById(dispatchId)
                        .orElseThrow(() ->
                                new IllegalArgumentException(
                                        "Dispatch not found."
                                )
                        );

        if (policeCaseRepository.findByDispatch(dispatch).isPresent()) {

            throw new IllegalArgumentException(
                    "Police case already exists."
            );

        }

        PoliceStation station =
                getCurrentPoliceStation();

        PoliceCase policeCase =
                PoliceCase.builder()
                        .dispatch(dispatch)
                        .policeStation(station)
                        .status(PoliceCaseStatus.ACCEPTED)
                        .notes(request.getNotes())
                        .acceptedAt(LocalDateTime.now())
                        .build();

        PoliceCase saved =
                policeCaseRepository.save(policeCase);

        log.info(
                "Police case accepted. Dispatch={}",
                dispatchId
        );

        return policeCaseMapper.toResponse(saved);

    }

    @Override
    public PoliceCaseResponse getPoliceCase(
            Long id
    ) {

        PoliceStation station =
                getCurrentPoliceStation();

        PoliceCase policeCase =
                policeCaseRepository
                        .findByIdAndPoliceStation(
                                id,
                                station
                        )
                        .orElseThrow(() ->
                                new IllegalArgumentException(
                                        "Police case not found."
                                )
                        );

        return policeCaseMapper.toResponse(
                policeCase
        );

    }

    @Override
    @Transactional
    public PoliceCaseResponse updateStatus(
            Long id,
            UpdatePoliceCaseStatusRequest request
    ) {

        PoliceStation station =
                getCurrentPoliceStation();

        PoliceCase policeCase =
                policeCaseRepository
                        .findByIdAndPoliceStation(
                                id,
                                station
                        )
                        .orElseThrow(() ->
                                new IllegalArgumentException(
                                        "Police case not found."
                                )
                        );

        policeCase.setStatus(
                request.getStatus()
        );

        if (request.getNotes() != null &&
                !request.getNotes().isBlank()) {

            policeCase.setNotes(
                    request.getNotes()
            );

        }

        PoliceCase updated =
                policeCaseRepository.save(
                        policeCase
                );

        log.info(
                "Police case {} updated to {}",
                updated.getId(),
                updated.getStatus()
        );

        return policeCaseMapper.toResponse(
                updated
        );

    }

    @Override
    public List<PoliceCaseResponse> getHistory() {

        PoliceStation station =
                getCurrentPoliceStation();

        return policeCaseRepository
                .findByPoliceStationOrderByAcceptedAtDesc(
                        station
                )
                .stream()
                .map(policeCaseMapper::toResponse)
                .toList();

    }

}
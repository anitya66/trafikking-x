package com.trafikkingx.incident.service.impl;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.citizen.entity.CitizenProfile;
import com.trafikkingx.citizen.repository.CitizenProfileRepository;
import com.trafikkingx.common.exception.custom.CitizenProfileNotFoundException;
import com.trafikkingx.common.exception.custom.IncidentNotFoundException;
import com.trafikkingx.incident.dto.request.CreateIncidentRequest;
import com.trafikkingx.incident.dto.request.UpdateIncidentRequest;
import com.trafikkingx.incident.dto.response.IncidentResponse;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.incident.mapper.IncidentMapper;
import com.trafikkingx.incident.repository.IncidentRepository;
import com.trafikkingx.incident.service.IncidentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.trafikkingx.common.event.IncidentCreatedEvent;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class IncidentServiceImpl implements IncidentService {

    private final IncidentRepository incidentRepository;

    private final CitizenProfileRepository citizenProfileRepository;

    private final UserRepository userRepository;

    private final IncidentMapper incidentMapper;

    private final ApplicationEventPublisher eventPublisher;

    private User getCurrentUser() {

    String email = SecurityContextHolder.getContext()
            .getAuthentication()
            .getName();

    return userRepository.findByEmail(email)
            .orElseThrow(() ->
                    new UsernameNotFoundException("User not found"));
}

private CitizenProfile getCurrentCitizenProfile() {

    User currentUser = getCurrentUser();

    return citizenProfileRepository.findByUser(currentUser)
            .orElseThrow(CitizenProfileNotFoundException::new);
}

private Incident getIncident(
        Long id,
        CitizenProfile citizenProfile) {

    return incidentRepository
            .findByIdAndCitizenProfile(id, citizenProfile)
            .orElseThrow(IncidentNotFoundException::new);
}

private String generateIncidentNumber() {

    long nextNumber = incidentRepository.count() + 1;

    int year = java.time.LocalDate.now().getYear();

    return String.format(
            "TX-%d-%06d",
            year,
            nextNumber
    );
}

@Override
@Transactional
public IncidentResponse createIncident(
        CreateIncidentRequest request) {

    log.info("Creating new incident");

    CitizenProfile citizenProfile = getCurrentCitizenProfile();

    Incident incident = incidentMapper.toEntity(request);

    incident.setCitizenProfile(citizenProfile);

    incident.setIncidentNumber(generateIncidentNumber());

    Incident savedIncident = incidentRepository.save(incident);

eventPublisher.publishEvent(

        new IncidentCreatedEvent(

                savedIncident.getId(),

                savedIncident.getIncidentNumber()

        )

);

log.info(
        "Incident {} created successfully",
        savedIncident.getIncidentNumber()
);

return incidentMapper.toResponse(savedIncident);
}

@Override
public List<IncidentResponse> getMyIncidents() {

    log.info("Fetching incidents for current user");

    CitizenProfile citizenProfile = getCurrentCitizenProfile();

    List<Incident> incidents =
            incidentRepository.findByCitizenProfileOrderByReportedAtDesc(
                    citizenProfile
            );

    log.info("Fetched {} incident(s)", incidents.size());

    return incidents.stream()
            .map(incidentMapper::toResponse)
            .toList();
}

@Override
public IncidentResponse getIncidentById(Long id) {

    log.info("Fetching incident with id: {}", id);

    CitizenProfile citizenProfile = getCurrentCitizenProfile();

    Incident incident = getIncident(id, citizenProfile);

    log.info(
            "Incident {} fetched successfully",
            incident.getIncidentNumber()
    );

    return incidentMapper.toResponse(incident);
}

@Override
@Transactional
public IncidentResponse updateIncident(
        Long id,
        UpdateIncidentRequest request) {

    log.info("Updating incident with id: {}", id);

    CitizenProfile citizenProfile = getCurrentCitizenProfile();

    Incident incident = getIncident(id, citizenProfile);

    incidentMapper.updateEntity(request, incident);

    Incident updatedIncident = incidentRepository.save(incident);

    log.info(
            "Incident {} updated successfully",
            updatedIncident.getIncidentNumber()
    );

    return incidentMapper.toResponse(updatedIncident);
}

@Override
@Transactional
public void deleteIncident(Long id) {

    log.info("Deleting incident with id: {}", id);

    CitizenProfile citizenProfile = getCurrentCitizenProfile();

    Incident incident = getIncident(id, citizenProfile);

    incidentRepository.delete(incident);

    log.info(
            "Incident {} deleted successfully",
            incident.getIncidentNumber()
    );
}

}
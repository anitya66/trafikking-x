package com.trafikkingx.map.service.impl;

import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.incident.repository.IncidentRepository;
import com.trafikkingx.map.dto.response.MapMarkerResponse;
import com.trafikkingx.map.dto.response.MapOverviewResponse;
import com.trafikkingx.map.service.MapService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MapServiceImpl implements MapService {

    private final IncidentRepository incidentRepository;

    @Override
    public MapOverviewResponse getMapOverview() {

        List<MapMarkerResponse> incidents =
                incidentRepository.findAll()
                        .stream()
                        .filter(incident ->
                                incident.getLatitude() != null &&
                                incident.getLongitude() != null
                        )
                        .map(this::toIncidentMarker)
                        .toList();

        return MapOverviewResponse.builder()
                .incidents(incidents)
                .hospitals(List.of())
                .ambulances(List.of())
                .policeStations(List.of())
                .build();
    }

    private MapMarkerResponse toIncidentMarker(
            Incident incident
    ) {

        return MapMarkerResponse.builder()
                .id(incident.getId())
                .title(incident.getIncidentType().name())
                .latitude(incident.getLatitude())
                .longitude(incident.getLongitude())
                .type("INCIDENT")
                .status(incident.getStatus().name())
                .severity(incident.getSeverity().name())
                .build();
    }
}
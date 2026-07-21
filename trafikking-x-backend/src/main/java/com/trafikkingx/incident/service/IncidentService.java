package com.trafikkingx.incident.service;

import com.trafikkingx.incident.dto.request.CreateIncidentRequest;
import com.trafikkingx.incident.dto.request.UpdateIncidentRequest;
import com.trafikkingx.incident.dto.response.IncidentResponse;

import java.util.List;

public interface IncidentService {

    IncidentResponse createIncident(
            CreateIncidentRequest request
    );

    List<IncidentResponse> getMyIncidents();

    IncidentResponse getIncidentById(Long id);

    IncidentResponse updateIncident(
            Long id,
            UpdateIncidentRequest request
    );

    void deleteIncident(Long id);
}
package com.trafikkingx.assignment.service;

import com.trafikkingx.assignment.dto.response.AssignmentResponse;

public interface AssignmentEngineService {

    /**
     * Automatically assigns the nearest and most suitable
     * emergency resources for the given incident.
     *
     * @param incidentId Incident ID
     * @return AssignmentResponse
     */
    AssignmentResponse autoAssign(Long incidentId);
}
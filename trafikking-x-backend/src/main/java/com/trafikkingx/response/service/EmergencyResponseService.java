package com.trafikkingx.response.service;

import com.trafikkingx.response.dto.response.EmergencyResponseResponse;

public interface EmergencyResponseService {

    /**
     * Executes the complete emergency response workflow.
     *
     * Workflow:
     * Incident
     *      ↓
     * Dispatch
     *      ↓
     * Resource Assignment
     *      ↓
     * Notification
     *
     * @param incidentId Incident Id
     * @return EmergencyResponseResponse
     */
    EmergencyResponseResponse processEmergency(
            Long incidentId
    );
}
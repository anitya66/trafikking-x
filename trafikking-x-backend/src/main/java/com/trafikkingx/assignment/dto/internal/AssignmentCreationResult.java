package com.trafikkingx.assignment.dto.internal;

import com.trafikkingx.assignment.dto.response.AssignmentResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

/**
 * Internal result returned by AssignmentEngine.
 *
 * This object contains everything required by the
 * workflow layer (DispatchService) without exposing
 * Assignment JPA entities.
 */
@Getter
@Builder
@AllArgsConstructor
public class AssignmentCreationResult {

    /**
     * Newly created assignment id.
     */
    private final Long assignmentId;

    /**
     * Incident id.
     */
    private final Long incidentId;

    /**
     * Assigned ambulance.
     */
    private final Long ambulanceId;

    /**
     * Dispatcher who approved the assignment.
     */
    private final Long dispatcherId;

    /**
     * API response returned to caller.
     */
    private final AssignmentResponse response;

    private final Long recipientUserId;

}
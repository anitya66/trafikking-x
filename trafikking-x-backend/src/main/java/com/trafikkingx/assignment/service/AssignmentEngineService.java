package com.trafikkingx.assignment.service;

import com.trafikkingx.assignment.dto.internal.AssignmentCreationResult;
import com.trafikkingx.assignment.dto.request.CreateAssignmentRequest;
import com.trafikkingx.assignment.dto.response.AssignmentResponse;

public interface AssignmentEngineService {

    /**
     * Legacy method.
     *
     * Will be removed after the dispatcher approval
     * workflow is fully migrated.
     */
    AssignmentResponse autoAssign(
            Long incidentId
    );

    /**
     * Creates an assignment from dispatcher-approved
     * resources.
     */
    AssignmentCreationResult createAssignment(
        CreateAssignmentRequest request
);

}
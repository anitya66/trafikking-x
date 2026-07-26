package com.trafikkingx.assignment.service;

import com.trafikkingx.assignment.dto.request.AssignmentActionRequest;
import com.trafikkingx.assignment.dto.response.AssignmentDetailsResponse;

import java.util.List;

public interface AmbulanceAssignmentService {

    List<AssignmentDetailsResponse> getMyAssignments();

    AssignmentDetailsResponse getCurrentAssignment();

    AssignmentDetailsResponse acceptAssignment(
            Long assignmentId,
            AssignmentActionRequest request
    );

    AssignmentDetailsResponse rejectAssignment(
            Long assignmentId,
            AssignmentActionRequest request
    );

    AssignmentDetailsResponse completeAssignment(
            Long assignmentId,
            AssignmentActionRequest request
    );

    AssignmentDetailsResponse startJourney(
        Long assignmentId,
        AssignmentActionRequest request
);

AssignmentDetailsResponse markArrived(
        Long assignmentId,
        AssignmentActionRequest request
);

}
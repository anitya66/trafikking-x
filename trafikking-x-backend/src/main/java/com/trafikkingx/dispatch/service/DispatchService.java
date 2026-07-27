package com.trafikkingx.dispatch.service;

import com.trafikkingx.dispatch.dto.request.AssignResourcesRequest;
import com.trafikkingx.dispatch.dto.request.CompleteDispatchRequest;
import com.trafikkingx.dispatch.dto.request.CreateDispatchRequest;
import com.trafikkingx.dispatch.dto.request.UpdateDispatchStatusRequest;
import com.trafikkingx.dispatch.dto.response.DispatchResponse;
import com.trafikkingx.assignment.dto.response.AssignmentResponse;
import com.trafikkingx.dispatch.dto.request.DispatchApprovalRequest;
import java.util.List;

public interface DispatchService {

    DispatchResponse createDispatch(
            CreateDispatchRequest request
    );

    DispatchResponse assignResources(
            Long dispatchId,
            AssignResourcesRequest request
    );

    DispatchResponse updateDispatchStatus(
            Long dispatchId,
            UpdateDispatchStatusRequest request
    );

    DispatchResponse completeDispatch(
            Long dispatchId,
            CompleteDispatchRequest request
    );

    DispatchResponse getDispatch(Long dispatchId);

    DispatchResponse getDispatchByIncident(
            Long incidentId
    );

    List<DispatchResponse> getAllDispatches();

    DispatchResponse autoAssignResources(
        Long incidentId
);

/**
 * Dispatcher approves the AI recommendation
 * and creates the official assignment.
 */
AssignmentResponse approveDispatch(
        Long dispatchId,
        DispatchApprovalRequest request
);

}
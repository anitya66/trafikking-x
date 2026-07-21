package com.trafikkingx.dispatch.service;

import com.trafikkingx.dispatch.dto.request.AssignResourcesRequest;
import com.trafikkingx.dispatch.dto.request.CompleteDispatchRequest;
import com.trafikkingx.dispatch.dto.request.CreateDispatchRequest;
import com.trafikkingx.dispatch.dto.request.UpdateDispatchStatusRequest;
import com.trafikkingx.dispatch.dto.response.DispatchResponse;

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
}
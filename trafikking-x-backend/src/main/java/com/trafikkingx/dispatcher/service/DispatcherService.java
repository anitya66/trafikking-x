package com.trafikkingx.dispatcher.service;

import com.trafikkingx.common.pagination.PageResponse;
import com.trafikkingx.dispatcher.dto.request.CreateDispatcherRequest;
import com.trafikkingx.dispatcher.dto.request.UpdateDispatcherRequest;
import com.trafikkingx.dispatcher.dto.response.DispatcherResponse;
import com.trafikkingx.dispatcher.enums.DispatcherStatus;

public interface DispatcherService {

    DispatcherResponse createDispatcher(
            CreateDispatcherRequest request);

    PageResponse<DispatcherResponse> getAllDispatchers(
            int page,
            int size,
            String zone,
            DispatcherStatus status
    );

    DispatcherResponse getDispatcherById(Long id);

    DispatcherResponse updateDispatcher(
            Long id,
            UpdateDispatcherRequest request);

    void deleteDispatcher(Long id);
}
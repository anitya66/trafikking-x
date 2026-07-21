package com.trafikkingx.police.service;

import com.trafikkingx.common.pagination.PageResponse;
import com.trafikkingx.police.dto.request.CreatePoliceStationRequest;
import com.trafikkingx.police.dto.request.UpdatePoliceStationRequest;
import com.trafikkingx.police.dto.response.PoliceStationResponse;
import com.trafikkingx.police.enums.PoliceStationType;

public interface PoliceStationService {

    PoliceStationResponse createPoliceStation(
            CreatePoliceStationRequest request
    );

    PageResponse<PoliceStationResponse> getAllPoliceStations(
            int page,
            int size,
            String city,
            PoliceStationType type
    );

    PoliceStationResponse getPoliceStationById(Long id);

    PoliceStationResponse updatePoliceStation(
            Long id,
            UpdatePoliceStationRequest request
    );

    void deletePoliceStation(Long id);
}
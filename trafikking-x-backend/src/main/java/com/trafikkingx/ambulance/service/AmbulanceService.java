package com.trafikkingx.ambulance.service;

import com.trafikkingx.ambulance.dto.request.CreateAmbulanceRequest;
import com.trafikkingx.ambulance.dto.request.UpdateAmbulanceRequest;
import com.trafikkingx.ambulance.dto.request.UpdateLocationRequest;
import com.trafikkingx.ambulance.dto.response.AmbulanceLocationResponse;
import com.trafikkingx.ambulance.dto.response.AmbulanceResponse;

import java.util.List;

public interface AmbulanceService {

    AmbulanceResponse createAmbulance(
            CreateAmbulanceRequest request
    );

    List<AmbulanceResponse> getAllAmbulances();

    AmbulanceResponse getAmbulanceById(Long id);

    AmbulanceResponse updateAmbulance(
            Long id,
            UpdateAmbulanceRequest request
    );

    void deleteAmbulance(Long id);

    AmbulanceLocationResponse updateLocation(
        Long ambulanceId,
        UpdateLocationRequest request
);
}
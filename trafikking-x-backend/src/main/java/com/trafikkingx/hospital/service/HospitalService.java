package com.trafikkingx.hospital.service;

import com.trafikkingx.hospital.dto.request.CreateHospitalRequest;
import com.trafikkingx.hospital.dto.request.UpdateHospitalRequest;
import com.trafikkingx.hospital.dto.response.HospitalResponse;

import java.util.List;

public interface HospitalService {

    HospitalResponse createHospital(
            CreateHospitalRequest request
    );

    List<HospitalResponse> getAllHospitals();

    HospitalResponse getHospitalById(Long id);

    HospitalResponse updateHospital(
            Long id,
            UpdateHospitalRequest request
    );

    void deleteHospital(Long id);
}
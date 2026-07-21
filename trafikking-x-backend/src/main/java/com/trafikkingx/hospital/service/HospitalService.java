package com.trafikkingx.hospital.service;

import com.trafikkingx.common.pagination.PageResponse;
import com.trafikkingx.hospital.dto.request.CreateHospitalRequest;
import com.trafikkingx.hospital.dto.request.UpdateHospitalRequest;
import com.trafikkingx.hospital.dto.response.HospitalResponse;
import com.trafikkingx.hospital.enums.HospitalType;

import java.util.List;

public interface HospitalService {

    HospitalResponse createHospital(
            CreateHospitalRequest request
    );

    PageResponse<HospitalResponse> getAllHospitals(
        int page,
        int size,
        String city,
        HospitalType type
);

    HospitalResponse getHospitalById(Long id);

    HospitalResponse updateHospital(
            Long id,
            UpdateHospitalRequest request
    );

    void deleteHospital(Long id);
}
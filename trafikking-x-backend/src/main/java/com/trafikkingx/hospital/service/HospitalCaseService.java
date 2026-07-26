package com.trafikkingx.hospital.service;

import com.trafikkingx.hospital.dto.request.UpdateHospitalCaseStatusRequest;
import com.trafikkingx.hospital.dto.response.HospitalCaseResponse;

public interface HospitalCaseService {

    HospitalCaseResponse createHospitalCase(
            Long dispatchId,
            String notes
    );

    HospitalCaseResponse getHospitalCase(
            Long id
    );

    HospitalCaseResponse updateStatus(
            Long id,
            UpdateHospitalCaseStatusRequest request
    );

}
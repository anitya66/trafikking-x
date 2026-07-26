package com.trafikkingx.hospital.service;

import com.trafikkingx.hospital.dto.request.AcceptPatientRequest;
import com.trafikkingx.hospital.dto.response.HospitalCaseResponse;
import com.trafikkingx.hospital.dto.response.IncomingPatientResponse;

import java.util.List;

public interface HospitalPatientService {

    List<IncomingPatientResponse> getIncomingPatients();

    HospitalCaseResponse acceptPatient(
        Long dispatchId,
        AcceptPatientRequest request
);

}
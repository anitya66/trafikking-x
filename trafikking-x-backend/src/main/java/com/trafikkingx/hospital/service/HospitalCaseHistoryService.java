package com.trafikkingx.hospital.service;

import com.trafikkingx.hospital.dto.response.HospitalCaseResponse;

import java.util.List;

public interface HospitalCaseHistoryService {

    List<HospitalCaseResponse> getHistory();

}
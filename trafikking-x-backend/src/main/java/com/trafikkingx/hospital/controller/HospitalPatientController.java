package com.trafikkingx.hospital.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.hospital.dto.request.AcceptPatientRequest;
import com.trafikkingx.hospital.dto.response.HospitalCaseResponse;
import com.trafikkingx.hospital.dto.response.IncomingPatientResponse;
import com.trafikkingx.hospital.service.HospitalPatientService;
import org.springframework.web.bind.annotation.RequestBody;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/hospitals/patients")
@RequiredArgsConstructor
public class HospitalPatientController {

    private final HospitalPatientService hospitalPatientService;

    @GetMapping("/incoming")
    public ApiResponse<List<IncomingPatientResponse>> getIncomingPatients() {

        List<IncomingPatientResponse> response =
                hospitalPatientService.getIncomingPatients();

        return ApiResponse.<List<IncomingPatientResponse>>builder()
                .success(true)
                .message("Incoming patients fetched successfully")
                .data(response)
                .build();
    }

@PutMapping("/{dispatchId}/accept")
public ApiResponse<HospitalCaseResponse> acceptPatient(

        @PathVariable Long dispatchId,

        @Valid
        @RequestBody
        AcceptPatientRequest request
) {

    HospitalCaseResponse response =
            hospitalPatientService.acceptPatient(
                    dispatchId,
                    request
            );

    return ApiResponse.<HospitalCaseResponse>builder()
            .success(true)
            .message("Patient accepted successfully")
            .data(response)
            .build();

}

}


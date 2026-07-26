package com.trafikkingx.hospital.dto.request;

import com.trafikkingx.hospital.enums.HospitalCaseStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UpdateHospitalCaseStatusRequest {

    @NotNull
    private HospitalCaseStatus status;

    private String notes;

}
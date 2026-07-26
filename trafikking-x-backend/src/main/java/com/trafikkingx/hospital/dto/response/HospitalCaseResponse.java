package com.trafikkingx.hospital.dto.response;

import com.trafikkingx.hospital.enums.HospitalCaseStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HospitalCaseResponse {

    private Long id;

    private Long dispatchId;

    private String incidentNumber;

    private String patientName;

    private String hospitalName;

    private HospitalCaseStatus status;

    private LocalDateTime acceptedAt;

    private String incidentType;

private String notes;

}
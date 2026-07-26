package com.trafikkingx.police.dto.response;

import com.trafikkingx.police.enums.PoliceCaseStatus;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class PoliceCaseResponse {

    private Long id;

    private Long dispatchId;

    private String incidentNumber;

    private String citizenName;

    private String incidentType;

    private String severity;

    private String policeStationName;

    private PoliceCaseStatus status;

    private String notes;

    private LocalDateTime acceptedAt;

    private String citizenPhoneNumber;

private String incidentLocation;

private String incidentDescription;

private LocalDateTime incidentReportedAt;

}
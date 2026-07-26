package com.trafikkingx.hospital.dto.response;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IncomingPatientResponse {

    private String incidentNumber;

    private String patientName;

    private String incidentType;

    private String severity;

    private Integer etaMinutes;

    private Long dispatchId;

}
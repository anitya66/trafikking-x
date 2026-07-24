package com.trafikkingx.assignment.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentResponse {

    // Incident

    private Long incidentId;

    // Hospital

    private Long hospitalId;

    private String hospitalName;

    private Double hospitalDistance;

    private Integer hospitalEtaMinutes;

private Integer hospitalConfidence;

private String hospitalReason;

    // Ambulance

    private Long ambulanceId;

    private String vehicleNumber;

    private Double ambulanceDistance;

    private Integer ambulanceEtaMinutes;

private Integer ambulanceConfidence;

private String ambulanceReason;

    // Police

    private Long policeStationId;

    private String policeStationName;

    private Double policeDistance;

    private Integer policeEtaMinutes;

private Integer policeConfidence;

private String policeReason;
}
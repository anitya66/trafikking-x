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

    // Ambulance

    private Long ambulanceId;

    private String vehicleNumber;

    private Double ambulanceDistance;

    // Police

    private Long policeStationId;

    private String policeStationName;

    private Double policeDistance;
}
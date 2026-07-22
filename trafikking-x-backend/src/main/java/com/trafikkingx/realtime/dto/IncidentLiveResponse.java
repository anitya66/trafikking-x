package com.trafikkingx.realtime.dto;

import com.trafikkingx.incident.enums.IncidentStatus;
import com.trafikkingx.incident.enums.IncidentType;
import com.trafikkingx.incident.enums.SeverityLevel;
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
public class IncidentLiveResponse {

    private Long incidentId;

    private String incidentNumber;

    private IncidentType incidentType;

    private SeverityLevel severity;

    private IncidentStatus status;

    private String address;

    private Double latitude;

    private Double longitude;
}
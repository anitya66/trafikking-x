package com.trafikkingx.incident.dto.response;

import com.trafikkingx.incident.enums.IncidentStatus;
import com.trafikkingx.incident.enums.IncidentType;
import com.trafikkingx.incident.enums.SeverityLevel;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IncidentResponse {

    private Long id;

    private String incidentNumber;

    private IncidentType incidentType;

    private IncidentStatus status;

    private SeverityLevel severity;

    private String description;

    private Double latitude;

    private Double longitude;

    private String address;

    private LocalDateTime reportedAt;

    private LocalDateTime resolvedAt;
}
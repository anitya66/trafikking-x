package com.trafikkingx.incident.dto.request;

import com.trafikkingx.incident.enums.IncidentStatus;
import com.trafikkingx.incident.enums.SeverityLevel;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateIncidentRequest {

    private String description;

    private String address;

    private IncidentStatus status;

    private SeverityLevel severity;
}
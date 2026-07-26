package com.trafikkingx.police.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class IncomingPoliceCaseResponse {

    private Long dispatchId;

    private String incidentNumber;

    private String citizenName;

    private String incidentType;

    private String severity;

    private Integer etaMinutes;

}
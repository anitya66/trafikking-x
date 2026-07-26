package com.trafikkingx.police.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PoliceDashboardResponse {

    private Long activeCases;

    private Long availableOfficers;

    private Long patrolUnits;

    private Long highPriorityCases;

    private String stationStatus;

    private String aiRecommendation;

    private Long totalOfficers;

private Long availableVehicles;

private Long pendingInvestigations;

}
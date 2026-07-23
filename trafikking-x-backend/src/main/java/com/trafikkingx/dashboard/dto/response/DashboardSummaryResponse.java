package com.trafikkingx.dashboard.dto.response;

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
public class DashboardSummaryResponse {

    private long activeIncidents;

    private long todayIncidents;

    private long ambulancesReady;

    private long hospitalCapacity;

    private long policeUnits;
}
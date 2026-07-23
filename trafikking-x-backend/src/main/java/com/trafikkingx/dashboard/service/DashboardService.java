package com.trafikkingx.dashboard.service;

import com.trafikkingx.dashboard.dto.response.DashboardSummaryResponse;
import com.trafikkingx.dispatch.dto.response.DispatchResponse;
import com.trafikkingx.incident.dto.response.IncidentResponse;

import java.util.List;

public interface DashboardService {

    DashboardSummaryResponse getDashboardSummary();

    List<IncidentResponse> getRecentIncidents();

    List<DispatchResponse> getRecentDispatches();

}
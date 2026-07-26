package com.trafikkingx.hospital.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HospitalDashboardDataResponse {

    private HospitalDashboardResponse metrics;

    private List<IncomingPatientResponse> incomingPatients;

    private List<IncomingAmbulanceResponse> incomingAmbulances;

    private BedOccupancyResponse bedOccupancy;

    private ICUOccupancyResponse icuOccupancy;

    private AIRecommendationResponse aiRecommendation;

}
package com.trafikkingx.hospital.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HospitalDashboardResponse {

    private Long emergencyQueue;

    private Long availableBeds;

    private Long availableIcuBeds;

    private Long doctorsOnDuty;

    private Long incomingAmbulances;

    private Integer hospitalCapacity;

    private Long todayAdmissions;

    private String emergencyStatus;

}
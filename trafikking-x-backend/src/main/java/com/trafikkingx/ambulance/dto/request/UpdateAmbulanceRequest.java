package com.trafikkingx.ambulance.dto.request;

import com.trafikkingx.ambulance.enums.AmbulanceStatus;
import com.trafikkingx.ambulance.enums.VehicleType;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateAmbulanceRequest {

    private String driverName;

    private String driverPhone;

    private VehicleType vehicleType;

    private Double currentLatitude;

    private Double currentLongitude;

    private AmbulanceStatus status;

    private Boolean active;
}
package com.trafikkingx.ambulance.dto.response;

import com.trafikkingx.ambulance.enums.AmbulanceStatus;
import com.trafikkingx.ambulance.enums.VehicleType;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AmbulanceResponse {

    private Long id;

    private String vehicleNumber;

    private VehicleType vehicleType;

    private String driverName;

    private String driverPhone;

    private Double currentLatitude;

    private Double currentLongitude;

    private AmbulanceStatus status;

    private Boolean active;

    private LocalDateTime lastLocationUpdatedAt;
}
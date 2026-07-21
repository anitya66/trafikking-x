package com.trafikkingx.ambulance.dto.request;

import com.trafikkingx.ambulance.enums.VehicleType;
import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateAmbulanceRequest {

    @NotBlank
    private String vehicleNumber;

    @NotNull
    private VehicleType vehicleType;

    @NotBlank
    private String driverName;

    @NotBlank
    @Pattern(
            regexp = "^[6-9]\\d{9}$",
            message = "Invalid driver phone number"
    )
    private String driverPhone;

    @NotNull
    private Double currentLatitude;

    @NotNull
    private Double currentLongitude;
}
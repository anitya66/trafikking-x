package com.trafikkingx.police.dto.request;

import com.trafikkingx.police.enums.PoliceStationType;
import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreatePoliceStationRequest {

    @NotBlank
    private String stationName;

    @NotBlank
    private String stationCode;

    @NotNull
    private PoliceStationType stationType;

    @NotBlank
    @Pattern(
            regexp = "^[6-9]\\d{9}$",
            message = "Invalid contact number"
    )
    private String contactNumber;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String address;

    @NotBlank
    private String city;

    @NotBlank
    private String state;

    @NotBlank
    private String country;

    @NotBlank
    private String postalCode;

    @NotNull
    private Double latitude;

    @NotNull
    private Double longitude;
}
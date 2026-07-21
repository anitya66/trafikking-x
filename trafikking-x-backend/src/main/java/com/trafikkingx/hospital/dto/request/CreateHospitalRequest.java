package com.trafikkingx.hospital.dto.request;

import com.trafikkingx.hospital.enums.HospitalType;
import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateHospitalRequest {

    @NotBlank
    private String hospitalName;

    @NotNull
    private HospitalType hospitalType;

    @NotBlank
    private String licenseNumber;

    @NotBlank
    @Pattern(
            regexp = "^[6-9]\\d{9}$",
            message = "Invalid phone number"
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

    @NotNull
    @Min(1)
    private Integer totalBeds;

    @NotNull
    @Min(0)
    private Integer availableBeds;

    @NotNull
    @Min(0)
    private Integer icuBeds;

    @NotNull
    @Min(0)
    private Integer availableIcuBeds;

    @Builder.Default
    private Boolean emergencyAvailable = true;

    @Builder.Default
    private Boolean traumaCenter = false;
}
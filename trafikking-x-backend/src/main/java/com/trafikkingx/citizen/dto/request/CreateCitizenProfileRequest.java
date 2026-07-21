package com.trafikkingx.citizen.dto.request;

import com.trafikkingx.citizen.enums.BloodGroup;
import com.trafikkingx.citizen.enums.Gender;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateCitizenProfileRequest {

    @NotNull
    private String dateOfBirth;

    @NotNull
    private Gender gender;

    @NotNull
    private BloodGroup bloodGroup;

    private Double height;

    private Double weight;

    private String address;

    private String city;

    private String state;

    private String country;

    private String postalCode;

    private Double latitude;

    private Double longitude;

    private String medicalConditions;

    private String allergies;

    private String currentMedications;

    private Boolean organDonor;
}
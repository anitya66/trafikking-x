package com.trafikkingx.citizen.dto.request;

import com.trafikkingx.citizen.enums.BloodGroup;
import com.trafikkingx.citizen.enums.Gender;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateCitizenProfileRequest {

    private String dateOfBirth;

    private Gender gender;

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

    private String emergencyContactName;

    private String emergencyContactPhone;

    private String emergencyContactRelation;

    private String medicalConditions;

    private String allergies;

    private String currentMedications;

    private Boolean organDonor;
}
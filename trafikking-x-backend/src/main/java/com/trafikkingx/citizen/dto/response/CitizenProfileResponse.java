package com.trafikkingx.citizen.dto.response;

import com.trafikkingx.citizen.enums.BloodGroup;
import com.trafikkingx.citizen.enums.Gender;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CitizenProfileResponse {

    private Long id;

    private String fullName;

    private String email;

    private String phoneNumber;

    private String profileImageUrl;

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

    private Boolean profileCompleted;
}
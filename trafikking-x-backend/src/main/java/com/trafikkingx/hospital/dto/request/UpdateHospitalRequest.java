package com.trafikkingx.hospital.dto.request;

import com.trafikkingx.hospital.enums.HospitalType;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateHospitalRequest {

    private String hospitalName;

    private HospitalType hospitalType;

    private String contactNumber;

    private String email;

    private String address;

    private String city;

    private String state;

    private String country;

    private String postalCode;

    private Integer totalBeds;

    private Integer availableBeds;

    private Integer icuBeds;

    private Integer availableIcuBeds;

    private Boolean emergencyAvailable;

    private Boolean traumaCenter;

    private Boolean active;
}
package com.trafikkingx.hospital.dto.response;

import com.trafikkingx.hospital.enums.HospitalType;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HospitalResponse {

    private Long id;

    private String hospitalName;

    private HospitalType hospitalType;

    private String licenseNumber;

    private String contactNumber;

    private String email;

    private String address;

    private String city;

    private String state;

    private String country;

    private String postalCode;

    private Double latitude;

    private Double longitude;

    private Integer totalBeds;

    private Integer availableBeds;

    private Integer icuBeds;

    private Integer availableIcuBeds;

    private Boolean emergencyAvailable;

    private Boolean traumaCenter;

    private Boolean active;
}
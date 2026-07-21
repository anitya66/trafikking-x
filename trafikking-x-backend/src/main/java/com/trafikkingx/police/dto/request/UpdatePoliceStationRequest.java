package com.trafikkingx.police.dto.request;

import com.trafikkingx.police.enums.PoliceStationType;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdatePoliceStationRequest {

    private String stationName;

    private PoliceStationType stationType;

    private String contactNumber;

    private String email;

    private String address;

    private String city;

    private String state;

    private String country;

    private String postalCode;

    private Double latitude;

    private Double longitude;

    private Boolean active;
}
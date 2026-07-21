package com.trafikkingx.police.dto.response;

import com.trafikkingx.police.enums.PoliceStationType;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PoliceStationResponse {

    private Long id;

    private String stationName;

    private String stationCode;

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
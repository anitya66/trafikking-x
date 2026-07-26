package com.trafikkingx.hospital.dto.response;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IncomingAmbulanceResponse {

    private String ambulanceNumber;

    private String driverName;

    private Integer etaMinutes;

    private String status;

}
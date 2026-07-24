package com.trafikkingx.ambulance.dto.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AmbulanceLocationResponse {

    private Long ambulanceId;

    private Double latitude;

    private Double longitude;

    private LocalDateTime updatedAt;

}
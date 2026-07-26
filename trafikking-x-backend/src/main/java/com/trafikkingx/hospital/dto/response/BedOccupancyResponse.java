package com.trafikkingx.hospital.dto.response;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BedOccupancyResponse {

    private Long totalBeds;

    private Long occupiedBeds;

    private Long availableBeds;

    private Integer occupancyPercentage;

}
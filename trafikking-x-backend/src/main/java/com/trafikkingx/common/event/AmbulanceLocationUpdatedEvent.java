package com.trafikkingx.common.event;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AmbulanceLocationUpdatedEvent {

    private Long ambulanceId;

    private Double latitude;

    private Double longitude;

}
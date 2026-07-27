package com.trafikkingx.tracking.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class LiveLocationResponse {

    private final Long ambulanceId;

    private final Double latitude;

    private final Double longitude;

}
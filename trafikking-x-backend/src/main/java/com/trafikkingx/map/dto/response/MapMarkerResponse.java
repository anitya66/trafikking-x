package com.trafikkingx.map.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MapMarkerResponse {

    private Long id;

    private String title;

    private Double latitude;

    private Double longitude;

    private String type;

    private String status;

    private String severity;
}
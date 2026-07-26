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
public class MapAssignmentResponse {

    private Long assignmentId;

    private Long incidentId;

    private Long ambulanceId;

    private Long hospitalId;

    private Long policeStationId;

}
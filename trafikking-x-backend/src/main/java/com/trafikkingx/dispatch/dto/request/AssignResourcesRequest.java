package com.trafikkingx.dispatch.dto.request;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssignResourcesRequest {

    private Long hospitalId;

    private Long ambulanceId;

    private Long policeStationId;
}
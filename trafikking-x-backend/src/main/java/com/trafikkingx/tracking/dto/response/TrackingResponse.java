package com.trafikkingx.tracking.dto.response;

import com.trafikkingx.dispatch.enums.DispatchStatus;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TrackingResponse {

    private Long dispatchId;

    private DispatchStatus currentStatus;

    private Integer etaMinutes;

    private Double remainingDistanceKm;

    private List<TimelineEventResponse> timeline;

}
package com.trafikkingx.dispatch.dto.response;

import com.trafikkingx.dispatch.enums.DispatchStatus;
import com.trafikkingx.dispatch.enums.EmergencyPriority;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DispatchResponse {

    private Long id;

    private Long incidentId;

    private Long hospitalId;

    private Long ambulanceId;

    private Long policeStationId;

    private DispatchStatus status;

    private EmergencyPriority priority;

    private String dispatcherNotes;

    private LocalDateTime dispatchedAt;

    private LocalDateTime acceptedAt;

    private LocalDateTime completedAt;

    private LocalDateTime cancelledAt;
}
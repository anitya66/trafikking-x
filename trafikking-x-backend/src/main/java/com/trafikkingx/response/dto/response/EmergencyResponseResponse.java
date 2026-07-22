package com.trafikkingx.response.dto.response;

import com.trafikkingx.dispatch.enums.DispatchStatus;
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
public class EmergencyResponseResponse {

    /**
     * Incident Information
     */
    private Long incidentId;

    /**
     * Dispatch Information
     */
    private Long dispatchId;

    private DispatchStatus dispatchStatus;

    /**
     * Assigned Hospital
     */
    private Long hospitalId;

    private String hospitalName;

    /**
     * Assigned Ambulance
     */
    private Long ambulanceId;

    private String vehicleNumber;

    /**
     * Assigned Police Station
     */
    private Long policeStationId;

    private String policeStationName;

    /**
     * Workflow Information
     */
    private boolean assignmentCompleted;

    private boolean notificationSent;
}
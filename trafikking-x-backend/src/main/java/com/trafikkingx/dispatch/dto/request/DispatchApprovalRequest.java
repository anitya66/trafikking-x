package com.trafikkingx.dispatch.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Dispatcher approval request.
 *
 * This request is sent after the dispatcher reviews
 * AI recommendations and decides which resources
 * should actually be dispatched.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DispatchApprovalRequest {

    /**
     * Incident to dispatch.
     */
    @NotNull
    private Long incidentId;

    /**
     * Selected ambulance.
     */
    @NotNull
    private Long ambulanceId;

    /**
     * Selected hospital.
     */
    private Long hospitalId;

    /**
     * Selected police station.
     */
    private Long policeId;

    /**
     * Dispatcher remarks.
     */
    private String remarks;

}
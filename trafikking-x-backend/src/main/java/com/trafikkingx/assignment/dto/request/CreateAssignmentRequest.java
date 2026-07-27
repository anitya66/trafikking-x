package com.trafikkingx.assignment.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Request used after dispatcher approves
 * AI recommendations.
 *
 * AssignmentEngine does NOT calculate
 * recommendations anymore.
 *
 * It simply creates the assignment
 * from dispatcher-approved resources.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateAssignmentRequest {

    /**
     * Incident being assigned.
     */
    @NotNull(message = "Incident id is required.")
    private Long incidentId;

    /**
     * Dispatcher approved ambulance.
     */
    @NotNull(message = "Ambulance id is required.")
    private Long ambulanceId;

    /**
     * Optional remarks.
     */
    private String remarks;

}
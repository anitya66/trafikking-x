package com.trafikkingx.assignment.dto.response;

import com.trafikkingx.assignment.enums.AssignmentStatus;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentDetailsResponse {

    private Long assignmentId;

    private Long incidentId;

    private String incidentNumber;

    private String citizenName;

    private String emergencyType;

    private String vehicleNumber;

    private AssignmentStatus status;

    private LocalDateTime assignedAt;

    private LocalDateTime acceptedAt;

    private LocalDateTime completedAt;

    private String remarks;

}
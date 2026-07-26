package com.trafikkingx.assignment.entity;

import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.auth.entity.User;
import com.trafikkingx.common.entity.BaseEntity;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.assignment.enums.AssignmentStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(
        name = "assignments",
        indexes = {

                @Index(
                        name = "idx_assignment_incident",
                        columnList = "incident_id"
                ),

                @Index(
                        name = "idx_assignment_ambulance",
                        columnList = "ambulance_id"
                ),

                @Index(
                        name = "idx_assignment_status",
                        columnList = "status"
                )

        }
)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Assignment extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(nullable = false)
    private Incident incident;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(nullable = false)
    private Ambulance ambulance;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(nullable = false)
    private User dispatcher;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private AssignmentStatus status =
            AssignmentStatus.PENDING;

    @Builder.Default
    @Column(nullable = false)
    private LocalDateTime assignedAt =
            LocalDateTime.now();

    private LocalDateTime acceptedAt;

    private LocalDateTime completedAt;

    private String remarks;
}
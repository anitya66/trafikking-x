package com.trafikkingx.dispatch.entity;

import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.common.entity.BaseEntity;
import com.trafikkingx.dispatch.enums.DispatchStatus;
import com.trafikkingx.dispatch.enums.EmergencyPriority;
import com.trafikkingx.hospital.entity.Hospital;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.police.entity.PoliceStation;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(
        name = "dispatches",
        indexes = {
                @Index(name = "idx_dispatch_status", columnList = "status"),
                @Index(name = "idx_dispatch_priority", columnList = "priority")
        }
)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Dispatch extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "incident_id",
            nullable = false,
            unique = true
    )
    private Incident incident;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hospital_id")
    private Hospital hospital;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ambulance_id")
    private Ambulance ambulance;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "police_station_id")
    private PoliceStation policeStation;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private DispatchStatus status =
            DispatchStatus.PENDING;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EmergencyPriority priority;

    @Column(columnDefinition = "TEXT")
    private String dispatcherNotes;

    private LocalDateTime dispatchedAt;

    private LocalDateTime acceptedAt;

    private LocalDateTime completedAt;

    private LocalDateTime cancelledAt;
}
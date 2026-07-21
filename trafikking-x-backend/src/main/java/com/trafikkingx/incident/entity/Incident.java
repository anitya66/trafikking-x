package com.trafikkingx.incident.entity;

import com.trafikkingx.citizen.entity.CitizenProfile;
import com.trafikkingx.common.entity.BaseEntity;
import com.trafikkingx.incident.enums.IncidentStatus;
import com.trafikkingx.incident.enums.IncidentType;
import com.trafikkingx.incident.enums.SeverityLevel;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(
        name = "incidents",
        indexes = {
                @Index(name = "idx_incident_number", columnList = "incidentNumber"),
                @Index(name = "idx_incident_status", columnList = "status"),
                @Index(name = "idx_incident_citizen", columnList = "citizen_profile_id")
        }
)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Incident extends BaseEntity {

    @Column(nullable = false, unique = true, length = 30)
    private String incidentNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "citizen_profile_id",
            nullable = false
    )
    private CitizenProfile citizenProfile;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private IncidentType incidentType;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private IncidentStatus status = IncidentStatus.REPORTED;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private SeverityLevel severity = SeverityLevel.MEDIUM;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private Double latitude;

    @Column(nullable = false)
    private Double longitude;

    @Column(nullable = false)
    private String address;

    @Builder.Default
    @Column(nullable = false)
    private LocalDateTime reportedAt = LocalDateTime.now();

    private LocalDateTime resolvedAt;
}
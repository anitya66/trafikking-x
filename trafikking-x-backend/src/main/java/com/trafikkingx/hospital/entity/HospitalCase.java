package com.trafikkingx.hospital.entity;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.common.entity.BaseEntity;
import com.trafikkingx.dispatch.entity.Dispatch;
import com.trafikkingx.hospital.enums.HospitalCaseStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(
        name = "hospital_cases",
        indexes = {

                @Index(
                        name = "idx_case_dispatch",
                        columnList = "dispatch_id"
                ),

                @Index(
                        name = "idx_case_hospital",
                        columnList = "hospital_id"
                ),

                @Index(
                        name = "idx_case_status",
                        columnList = "status"
                )

        }
)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HospitalCase extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "dispatch_id",
            nullable = false,
            unique = true
    )
    private Dispatch dispatch;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "hospital_id",
            nullable = false
    )
    private Hospital hospital;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "accepted_by"
    )
    private User acceptedBy;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private HospitalCaseStatus status =
            HospitalCaseStatus.ACCEPTED;

    private LocalDateTime acceptedAt;

    private LocalDateTime arrivedAt;

    private LocalDateTime treatmentStartedAt;

    private LocalDateTime treatmentCompletedAt;

    private LocalDateTime dischargedAt;

    @Column(columnDefinition = "TEXT")
    private String notes;

}
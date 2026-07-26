package com.trafikkingx.police.entity;

import com.trafikkingx.common.entity.BaseEntity;
import com.trafikkingx.dispatch.entity.Dispatch;
import com.trafikkingx.police.enums.PoliceCaseStatus;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "police_cases")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PoliceCase extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "dispatch_id",
            nullable = false,
            unique = true
    )
    private Dispatch dispatch;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "police_station_id",
            nullable = false
    )
    private PoliceStation policeStation;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PoliceCaseStatus status;

    @Column(columnDefinition = "TEXT")
    private String notes;

    private java.time.LocalDateTime acceptedAt;

}
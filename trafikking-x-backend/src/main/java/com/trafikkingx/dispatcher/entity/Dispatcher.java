package com.trafikkingx.dispatcher.entity;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.common.entity.BaseEntity;
import com.trafikkingx.dispatcher.enums.DispatcherStatus;
import com.trafikkingx.dispatcher.enums.ShiftType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(
        name = "dispatchers",
        indexes = {
                @Index(name = "idx_dispatcher_employee", columnList = "employeeId"),
                @Index(name = "idx_dispatcher_status", columnList = "status"),
                @Index(name = "idx_dispatcher_zone", columnList = "zone"),
                @Index(name = "idx_dispatcher_active", columnList = "active")
        }
)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Dispatcher extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String employeeId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @Column(nullable = false)
    private String zone;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ShiftType shift;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private DispatcherStatus status = DispatcherStatus.AVAILABLE;

    @Builder.Default
    @Column(nullable = false)
    private Boolean active = true;
}
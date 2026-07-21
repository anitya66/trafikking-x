package com.trafikkingx.ambulance.entity;

import com.trafikkingx.ambulance.enums.AmbulanceStatus;
import com.trafikkingx.ambulance.enums.VehicleType;
import com.trafikkingx.common.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(
        name = "ambulances",
        indexes = {
                @Index(name = "idx_ambulance_vehicle", columnList = "vehicleNumber"),
                @Index(name = "idx_ambulance_status", columnList = "status"),
                @Index(name = "idx_ambulance_location", columnList = "currentLatitude,currentLongitude"),
                @Index(name = "idx_ambulance_active", columnList = "active")
        }
)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Ambulance extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String vehicleNumber;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private VehicleType vehicleType;

    @Column(nullable = false)
    private String driverName;

    @Column(nullable = false, unique = true)
    private String driverPhone;

    @Column(nullable = false)
    private Double currentLatitude;

    @Column(nullable = false)
    private Double currentLongitude;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private AmbulanceStatus status = AmbulanceStatus.AVAILABLE;

    @Builder.Default
    @Column(nullable = false)
    private Boolean active = true;

    @Builder.Default
    @Column(nullable = false)
    private LocalDateTime lastLocationUpdatedAt = LocalDateTime.now();
}
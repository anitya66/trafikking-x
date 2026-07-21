package com.trafikkingx.police.entity;

import com.trafikkingx.common.entity.BaseEntity;
import com.trafikkingx.police.enums.PoliceStationType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(
        name = "police_stations",
        indexes = {
                @Index(name = "idx_police_city", columnList = "city"),
                @Index(name = "idx_police_type", columnList = "stationType"),
                @Index(name = "idx_police_location", columnList = "latitude,longitude"),
                @Index(name = "idx_police_active", columnList = "active")
        }
)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PoliceStation extends BaseEntity {

    @Column(nullable = false)
    private String stationName;

    @Column(nullable = false, unique = true)
    private String stationCode;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PoliceStationType stationType;

    @Column(nullable = false)
    private String contactNumber;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String state;

    @Column(nullable = false)
    private String country;

    @Column(nullable = false)
    private String postalCode;

    @Column(nullable = false)
    private Double latitude;

    @Column(nullable = false)
    private Double longitude;

    @Builder.Default
    @Column(nullable = false)
    private Boolean active = true;
}
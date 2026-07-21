package com.trafikkingx.hospital.entity;

import com.trafikkingx.common.entity.BaseEntity;
import com.trafikkingx.hospital.enums.HospitalType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(
        name = "hospitals",
        indexes = {
                @Index(name = "idx_hospital_city", columnList = "city"),
                @Index(name = "idx_hospital_location", columnList = "latitude,longitude"),
                @Index(name = "idx_hospital_active", columnList = "active"),
                @Index(name = "idx_hospital_emergency", columnList = "emergencyAvailable")
        }
)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Hospital extends BaseEntity {

    @Column(nullable = false)
    private String hospitalName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private HospitalType hospitalType;

    @Column(nullable = false, unique = true)
    private String licenseNumber;

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

    @Column(nullable = false)
    private Integer totalBeds;

    @Column(nullable = false)
    private Integer availableBeds;

    @Column(nullable = false)
    private Integer icuBeds;

    @Column(nullable = false)
    private Integer availableIcuBeds;

    @Builder.Default
    @Column(nullable = false)
    private Boolean emergencyAvailable = true;

    @Builder.Default
    @Column(nullable = false)
    private Boolean traumaCenter = false;

    @Builder.Default
    @Column(nullable = false)
    private Boolean active = true;
}
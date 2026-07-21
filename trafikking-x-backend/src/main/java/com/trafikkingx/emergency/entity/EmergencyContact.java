package com.trafikkingx.emergency.entity;

import com.trafikkingx.citizen.entity.CitizenProfile;
import com.trafikkingx.common.entity.BaseEntity;
import com.trafikkingx.emergency.enums.Relationship;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "emergency_contacts")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmergencyContact extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "citizen_profile_id",
            nullable = false
    )
    private CitizenProfile citizenProfile;

    @Column(nullable = false)
    private String contactName;

    @Column(nullable = false, length = 15)
    private String contactPhone;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Relationship relationship;

    @Column(nullable = false)
    private Integer priority;

    @Column(nullable = false)
    @Builder.Default
    private Boolean primaryContact = false;
}
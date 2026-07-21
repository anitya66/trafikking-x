package com.trafikkingx.citizen.entity;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.citizen.enums.BloodGroup;
import com.trafikkingx.citizen.enums.Gender;
import com.trafikkingx.common.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.*;
import com.trafikkingx.emergency.entity.EmergencyContact;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(
    name = "citizen_profiles",
    indexes = {
        @Index(name = "idx_profile_user", columnList = "user_id")
    }
)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CitizenProfile extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "user_id",
            nullable = false,
            unique = true
    )
    private User user;

    private String profileImageUrl;

    private String dateOfBirth;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Enumerated(EnumType.STRING)
    private BloodGroup bloodGroup;

    private Double height;

    private Double weight;

    private String address;

    private String city;

    private String state;

    private String country;

    private String postalCode;

    private Double latitude;

    private Double longitude;

    @Column(columnDefinition = "TEXT")
    private String medicalConditions;

    @Column(columnDefinition = "TEXT")
    private String allergies;

    @Column(columnDefinition = "TEXT")
    private String currentMedications;

    private Boolean organDonor;

    @OneToMany(
        mappedBy = "citizenProfile",
        cascade = CascadeType.ALL,
        orphanRemoval = true)
    @Builder.Default
    private List<EmergencyContact> emergencyContacts =
        new ArrayList<>();

}
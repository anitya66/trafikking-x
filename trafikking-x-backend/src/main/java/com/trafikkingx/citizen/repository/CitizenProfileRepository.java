package com.trafikkingx.citizen.repository;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.citizen.entity.CitizenProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CitizenProfileRepository
        extends JpaRepository<CitizenProfile, Long> {

    Optional<CitizenProfile> findByUser(User user);

    boolean existsByUser(User user);

}
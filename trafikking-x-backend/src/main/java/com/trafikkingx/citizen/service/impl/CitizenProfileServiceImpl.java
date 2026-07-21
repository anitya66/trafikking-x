package com.trafikkingx.citizen.service.impl;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.citizen.dto.request.CreateCitizenProfileRequest;
import com.trafikkingx.citizen.dto.request.UpdateCitizenProfileRequest;
import com.trafikkingx.citizen.dto.response.CitizenProfileResponse;
import com.trafikkingx.citizen.entity.CitizenProfile;
import com.trafikkingx.citizen.mapper.CitizenProfileMapper;
import com.trafikkingx.citizen.repository.CitizenProfileRepository;
import com.trafikkingx.citizen.service.CitizenProfileService;
import com.trafikkingx.common.exception.custom.CitizenProfileAlreadyExistsException;
import com.trafikkingx.common.exception.custom.CitizenProfileNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class CitizenProfileServiceImpl implements CitizenProfileService {

    private final CitizenProfileRepository citizenProfileRepository;

    private final UserRepository userRepository;

    private final CitizenProfileMapper citizenProfileMapper;


    private User getCurrentUser() {

    String email = SecurityContextHolder.getContext()
            .getAuthentication()
            .getName();

    return userRepository.findByEmail(email)
            .orElseThrow(() ->
                    new UsernameNotFoundException("User not found"));
}

@Override
public CitizenProfileResponse createProfile(
        CreateCitizenProfileRequest request) {

    log.info("Creating citizen profile");

    User currentUser = getCurrentUser();

    if (citizenProfileRepository.existsByUser(currentUser)) {

        log.warn("Citizen profile already exists for user: {}",
                currentUser.getEmail());

        throw new CitizenProfileAlreadyExistsException();
    }

    CitizenProfile citizenProfile =
            citizenProfileMapper.toEntity(request);

    citizenProfile.setUser(currentUser);

    CitizenProfile savedProfile =
            citizenProfileRepository.save(citizenProfile);

    log.info("Citizen profile created successfully for user: {}",
            currentUser.getEmail());

    return citizenProfileMapper.toResponse(savedProfile);
}

@Override
public CitizenProfileResponse getMyProfile() {

    log.info("Fetching citizen profile");

    User currentUser = getCurrentUser();

    CitizenProfile citizenProfile = citizenProfileRepository
            .findByUser(currentUser)
            .orElseThrow(() -> {

                log.warn("Citizen profile not found for user: {}",
                        currentUser.getEmail());

                return new CitizenProfileNotFoundException();
            });

    log.info("Citizen profile fetched successfully for user: {}",
            currentUser.getEmail());

    return citizenProfileMapper.toResponse(citizenProfile);
}

@Override
public CitizenProfileResponse updateProfile(
        UpdateCitizenProfileRequest request) {

    log.info("Updating citizen profile");

    User currentUser = getCurrentUser();

    CitizenProfile citizenProfile = citizenProfileRepository
            .findByUser(currentUser)
            .orElseThrow(() -> {

                log.warn("Citizen profile not found for user: {}",
                        currentUser.getEmail());

                return new CitizenProfileNotFoundException();
            });

    citizenProfileMapper.updateEntity(request, citizenProfile);

    CitizenProfile updatedProfile =
            citizenProfileRepository.save(citizenProfile);

    log.info("Citizen profile updated successfully for user: {}",
            currentUser.getEmail());

    return citizenProfileMapper.toResponse(updatedProfile);
}

}
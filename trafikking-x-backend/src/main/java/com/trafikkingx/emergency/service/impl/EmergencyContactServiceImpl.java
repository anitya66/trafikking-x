package com.trafikkingx.emergency.service.impl;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.citizen.entity.CitizenProfile;
import com.trafikkingx.citizen.repository.CitizenProfileRepository;
import com.trafikkingx.common.exception.custom.CitizenProfileNotFoundException;
import com.trafikkingx.common.exception.custom.EmergencyContactLimitExceededException;
import com.trafikkingx.common.exception.custom.EmergencyContactNotFoundException;
import com.trafikkingx.common.exception.custom.DuplicatePriorityException;
import com.trafikkingx.emergency.dto.request.CreateEmergencyContactRequest;
import com.trafikkingx.emergency.dto.request.UpdateEmergencyContactRequest;
import com.trafikkingx.emergency.dto.response.EmergencyContactResponse;
import com.trafikkingx.emergency.entity.EmergencyContact;
import com.trafikkingx.emergency.mapper.EmergencyContactMapper;
import com.trafikkingx.emergency.repository.EmergencyContactRepository;
import com.trafikkingx.emergency.service.EmergencyContactService;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmergencyContactServiceImpl implements EmergencyContactService {

    private static final int MAX_CONTACTS = 5;

    private final EmergencyContactRepository emergencyContactRepository;

    private final CitizenProfileRepository citizenProfileRepository;

    private final UserRepository userRepository;

    private final EmergencyContactMapper emergencyContactMapper;

    private User getCurrentUser() {

    String email = SecurityContextHolder.getContext()
            .getAuthentication()
            .getName();

    return userRepository.findByEmail(email)
            .orElseThrow(() ->
                    new UsernameNotFoundException("User not found"));
}

private CitizenProfile getCurrentCitizenProfile() {

    User currentUser = getCurrentUser();

    return citizenProfileRepository.findByUser(currentUser)
            .orElseThrow(CitizenProfileNotFoundException::new);
}

private EmergencyContact getEmergencyContact(
        Long id,
        CitizenProfile citizenProfile) {

    return emergencyContactRepository
            .findByIdAndCitizenProfile(id, citizenProfile)
            .orElseThrow(EmergencyContactNotFoundException::new);
}

@Transactional
@Override
public EmergencyContactResponse createContact(
        CreateEmergencyContactRequest request) {

    log.info("Creating emergency contact");

    CitizenProfile citizenProfile = getCurrentCitizenProfile();

    List<EmergencyContact> contacts =
            emergencyContactRepository.findByCitizenProfile(citizenProfile);

    if (contacts.size() >= MAX_CONTACTS) {

        log.warn("Maximum emergency contact limit reached");

        throw new EmergencyContactLimitExceededException();
    }

    if (emergencyContactRepository.existsByCitizenProfileAndPriority(
            citizenProfile,
            request.getPriority())) {

        log.warn("Duplicate priority: {}", request.getPriority());

        throw new DuplicatePriorityException();
    }

    if (Boolean.TRUE.equals(request.getPrimaryContact())) {

        emergencyContactRepository
                .findByCitizenProfileAndPrimaryContactTrue(citizenProfile)
                .ifPresent(contact -> {

                    contact.setPrimaryContact(false);

                    emergencyContactRepository.save(contact);
                });
    }

    EmergencyContact emergencyContact =
            emergencyContactMapper.toEntity(request);

    emergencyContact.setCitizenProfile(citizenProfile);

    EmergencyContact savedContact =
            emergencyContactRepository.save(emergencyContact);

    log.info("Emergency contact created successfully");

    return emergencyContactMapper.toResponse(savedContact);
}

   @Override
public List<EmergencyContactResponse> getMyContacts() {

    log.info("Fetching emergency contacts");

    CitizenProfile citizenProfile = getCurrentCitizenProfile();

    List<EmergencyContact> contacts =
            emergencyContactRepository.findByCitizenProfile(citizenProfile);

    log.info("Fetched {} emergency contact(s)", contacts.size());

    return contacts.stream()
            .map(emergencyContactMapper::toResponse)
            .toList();
}

    @Override
public EmergencyContactResponse getContactById(Long id) {

    log.info("Fetching emergency contact with id: {}", id);

    CitizenProfile citizenProfile = getCurrentCitizenProfile();

    EmergencyContact emergencyContact =
            getEmergencyContact(id, citizenProfile);

    log.info("Emergency contact fetched successfully");

    return emergencyContactMapper.toResponse(emergencyContact);
}

@Transactional
@Override
public EmergencyContactResponse updateContact(
        Long id,
        UpdateEmergencyContactRequest request) {

    log.info("Updating emergency contact with id: {}", id);

    CitizenProfile citizenProfile = getCurrentCitizenProfile();

    EmergencyContact emergencyContact =
            getEmergencyContact(id, citizenProfile);

    if (request.getPriority() != null &&
            !request.getPriority().equals(emergencyContact.getPriority()) &&
            emergencyContactRepository.existsByCitizenProfileAndPriority(
                    citizenProfile,
                    request.getPriority())) {

        log.warn("Duplicate priority: {}", request.getPriority());

        throw new DuplicatePriorityException();
    }

    if (Boolean.TRUE.equals(request.getPrimaryContact())) {

        emergencyContactRepository
                .findByCitizenProfileAndPrimaryContactTrue(citizenProfile)
                .ifPresent(primaryContact -> {

                    if (!primaryContact.getId().equals(emergencyContact.getId())) {

                        primaryContact.setPrimaryContact(false);

                        emergencyContactRepository.save(primaryContact);
                    }
                });
    }

    emergencyContactMapper.updateEntity(request, emergencyContact);

    EmergencyContact updatedContact =
            emergencyContactRepository.save(emergencyContact);

    log.info("Emergency contact updated successfully");

    return emergencyContactMapper.toResponse(updatedContact);
}

@Transactional
@Override
public void deleteContact(Long id) {

    log.info("Deleting emergency contact with id: {}", id);

    CitizenProfile citizenProfile = getCurrentCitizenProfile();

    EmergencyContact emergencyContact =
            getEmergencyContact(id, citizenProfile);

    emergencyContactRepository.delete(emergencyContact);

    log.info("Emergency contact deleted successfully");
}

}
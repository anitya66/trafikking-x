package com.trafikkingx.ambulance.service.impl;

import com.trafikkingx.ambulance.dto.request.CreateAmbulanceRequest;
import com.trafikkingx.ambulance.dto.request.UpdateAmbulanceRequest;
import com.trafikkingx.ambulance.dto.response.AmbulanceResponse;
import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.ambulance.mapper.AmbulanceMapper;
import com.trafikkingx.ambulance.repository.AmbulanceRepository;
import com.trafikkingx.ambulance.service.AmbulanceService;
import com.trafikkingx.ambulance.validation.AmbulanceValidator;
import com.trafikkingx.common.exception.custom.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class AmbulanceServiceImpl implements AmbulanceService {

    private final AmbulanceRepository ambulanceRepository;

    private final AmbulanceMapper ambulanceMapper;

    private final AmbulanceValidator ambulanceValidator;

    private Ambulance getAmbulance(Long id) {

        return ambulanceRepository.findById(id)
                .orElseThrow(AmbulanceNotFoundException::new);
    }

@Override
@Transactional
public AmbulanceResponse createAmbulance(
        CreateAmbulanceRequest request) {

    log.info("Creating ambulance: {}", request.getVehicleNumber());

    ambulanceValidator.validate(request);

    if (ambulanceRepository.existsByVehicleNumber(
            request.getVehicleNumber())) {

        throw new VehicleNumberAlreadyExistsException(
                request.getVehicleNumber()
        );
    }

    if (ambulanceRepository.existsByDriverPhone(
            request.getDriverPhone())) {

        throw new DriverPhoneAlreadyExistsException(
                request.getDriverPhone()
        );
    }

    Ambulance ambulance =
            ambulanceMapper.toEntity(request);

    Ambulance savedAmbulance =
            ambulanceRepository.save(ambulance);

    log.info(
            "Ambulance created successfully: {}",
            savedAmbulance.getVehicleNumber()
    );

    return ambulanceMapper.toResponse(savedAmbulance);
}

@Override
public List<AmbulanceResponse> getAllAmbulances() {

    log.info("Fetching all active ambulances");

    List<Ambulance> ambulances =
            ambulanceRepository.findByActiveTrue();

    log.info(
            "Fetched {} ambulance(s)",
            ambulances.size()
    );

    return ambulances.stream()
            .map(ambulanceMapper::toResponse)
            .toList();
}

@Override
public AmbulanceResponse getAmbulanceById(Long id) {

    log.info("Fetching ambulance with id: {}", id);

    Ambulance ambulance = getAmbulance(id);

    return ambulanceMapper.toResponse(ambulance);
}

@Override
@Transactional
public AmbulanceResponse updateAmbulance(
        Long id,
        UpdateAmbulanceRequest request) {

    log.info("Updating ambulance with id: {}", id);

    Ambulance ambulance = getAmbulance(id);

    ambulanceMapper.updateEntity(request, ambulance);

    if (request.getCurrentLatitude() != null) {
        ambulance.setLastLocationUpdatedAt(java.time.LocalDateTime.now());
    }

    if (request.getCurrentLongitude() != null) {
        ambulance.setLastLocationUpdatedAt(java.time.LocalDateTime.now());
    }

    Ambulance updatedAmbulance =
            ambulanceRepository.save(ambulance);

    log.info(
            "Ambulance updated successfully: {}",
            updatedAmbulance.getVehicleNumber()
    );

    return ambulanceMapper.toResponse(updatedAmbulance);
}

@Override
@Transactional
public void deleteAmbulance(Long id) {

    log.info("Deleting ambulance with id: {}", id);

    Ambulance ambulance = getAmbulance(id);

    ambulanceRepository.delete(ambulance);

    log.info(
            "Ambulance deleted successfully: {}",
            ambulance.getVehicleNumber()
    );
}
}
package com.trafikkingx.hospital.service.impl;

import com.trafikkingx.common.exception.custom.*;
import com.trafikkingx.hospital.dto.request.CreateHospitalRequest;
import com.trafikkingx.hospital.dto.request.UpdateHospitalRequest;
import com.trafikkingx.hospital.dto.response.HospitalResponse;
import com.trafikkingx.hospital.entity.Hospital;
import com.trafikkingx.hospital.mapper.HospitalMapper;
import com.trafikkingx.hospital.repository.HospitalRepository;
import com.trafikkingx.hospital.service.HospitalService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class HospitalServiceImpl implements HospitalService {

    private final HospitalRepository hospitalRepository;

    private final HospitalMapper hospitalMapper;

    private Hospital getHospital(Long id) {

    return hospitalRepository.findById(id)
            .orElseThrow(HospitalNotFoundException::new);
}

@Override
@Transactional
public HospitalResponse createHospital(
        CreateHospitalRequest request) {

    log.info("Creating hospital: {}", request.getHospitalName());

    if (hospitalRepository.existsByLicenseNumber(
            request.getLicenseNumber())) {

        throw new HospitalLicenseAlreadyExistsException(
                request.getLicenseNumber()
        );
    }

    if (hospitalRepository.existsByEmail(
            request.getEmail())) {

        throw new HospitalEmailAlreadyExistsException(
                request.getEmail()
        );
    }

    if (request.getAvailableBeds() >
            request.getTotalBeds()) {

        throw new InvalidHospitalCapacityException(
                "Available beds cannot exceed total beds."
        );
    }

    if (request.getAvailableIcuBeds() >
            request.getIcuBeds()) {

        throw new InvalidHospitalCapacityException(
                "Available ICU beds cannot exceed ICU beds."
        );
    }

    Hospital hospital =
            hospitalMapper.toEntity(request);

    Hospital savedHospital =
            hospitalRepository.save(hospital);

    log.info(
            "Hospital created successfully: {}",
            savedHospital.getHospitalName()
    );

    return hospitalMapper.toResponse(savedHospital);
}

@Override
public List<HospitalResponse> getAllHospitals() {

    log.info("Fetching all active hospitals");

    List<Hospital> hospitals =
            hospitalRepository.findByActiveTrue();

    log.info("Fetched {} hospital(s)", hospitals.size());

    return hospitals.stream()
            .map(hospitalMapper::toResponse)
            .toList();
}

@Override
public HospitalResponse getHospitalById(Long id) {

    log.info("Fetching hospital with id: {}", id);

    Hospital hospital = getHospital(id);

    log.info(
            "Hospital fetched successfully: {}",
            hospital.getHospitalName()
    );

    return hospitalMapper.toResponse(hospital);
}

@Override
@Transactional
public HospitalResponse updateHospital(
        Long id,
        UpdateHospitalRequest request) {

    log.info("Updating hospital with id: {}", id);

    Hospital hospital = getHospital(id);

    if (request.getAvailableBeds() != null &&
            request.getTotalBeds() != null &&
            request.getAvailableBeds() > request.getTotalBeds()) {

        throw new InvalidHospitalCapacityException(
                "Available beds cannot exceed total beds."
        );
    }

    if (request.getAvailableIcuBeds() != null &&
            request.getIcuBeds() != null &&
            request.getAvailableIcuBeds() > request.getIcuBeds()) {

        throw new InvalidHospitalCapacityException(
                "Available ICU beds cannot exceed ICU beds."
        );
    }

    hospitalMapper.updateEntity(request, hospital);

    Hospital updatedHospital =
            hospitalRepository.save(hospital);

    log.info(
            "Hospital updated successfully: {}",
            updatedHospital.getHospitalName()
    );

    return hospitalMapper.toResponse(updatedHospital);
}

@Override
@Transactional
public void deleteHospital(Long id) {

    log.info("Deleting hospital with id: {}", id);

    Hospital hospital = getHospital(id);

    hospitalRepository.delete(hospital);

    log.info(
            "Hospital deleted successfully: {}",
            hospital.getHospitalName()
    );
}
}
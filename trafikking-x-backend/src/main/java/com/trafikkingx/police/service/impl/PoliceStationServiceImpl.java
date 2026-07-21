package com.trafikkingx.police.service.impl;

import com.trafikkingx.common.exception.custom.*;
import com.trafikkingx.common.pagination.PageResponse;
import com.trafikkingx.police.dto.request.CreatePoliceStationRequest;
import com.trafikkingx.police.dto.request.UpdatePoliceStationRequest;
import com.trafikkingx.police.dto.response.PoliceStationResponse;
import com.trafikkingx.police.entity.PoliceStation;
import com.trafikkingx.police.enums.PoliceStationType;
import com.trafikkingx.police.mapper.PoliceStationMapper;
import com.trafikkingx.police.repository.PoliceStationRepository;
import com.trafikkingx.police.service.PoliceStationService;
import com.trafikkingx.police.validation.PoliceStationValidator;
import lombok.RequiredArgsConstructor;
import com.trafikkingx.common.pagination.PaginationUtils;
import com.trafikkingx.police.specification.PoliceStationSpecification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class PoliceStationServiceImpl
        implements PoliceStationService {

    private final PoliceStationRepository policeStationRepository;

    private final PoliceStationMapper policeStationMapper;

    private final PoliceStationValidator policeStationValidator;

    private PoliceStation getPoliceStation(Long id) {

    return policeStationRepository.findById(id)
            .orElseThrow(PoliceStationNotFoundException::new);
}

    @Override
@Transactional
public PoliceStationResponse createPoliceStation(
        CreatePoliceStationRequest request) {

    log.info("Creating police station: {}", request.getStationName());

    policeStationValidator.validate(request);

    if (policeStationRepository.existsByStationCode(
            request.getStationCode())) {

        throw new StationCodeAlreadyExistsException(
                request.getStationCode()
        );
    }

    if (policeStationRepository.existsByEmail(
            request.getEmail())) {

        throw new PoliceStationEmailAlreadyExistsException(
                request.getEmail()
        );
    }

    PoliceStation policeStation =
            policeStationMapper.toEntity(request);

    PoliceStation savedPoliceStation =
            policeStationRepository.save(policeStation);

    log.info(
            "Police station created successfully: {}",
            savedPoliceStation.getStationName()
    );

    return policeStationMapper.toResponse(savedPoliceStation);
}

    @Override
public PageResponse<PoliceStationResponse> getAllPoliceStations(
        int page,
        int size,
        String city,
        PoliceStationType type) {

    log.info(
            "Fetching police stations. page={}, size={}, city={}, type={}",
            page,
            size,
            city,
            type
    );

    Pageable pageable = PageRequest.of(page, size);

    Specification<PoliceStation> specification =
            Specification
                    .where(PoliceStationSpecification.isActive())
                    .and(PoliceStationSpecification.hasCity(city))
                    .and(PoliceStationSpecification.hasType(type));

    Page<PoliceStation> policePage =
            policeStationRepository.findAll(
                    specification,
                    pageable
            );

    Page<PoliceStationResponse> response =
            policePage.map(
                    policeStationMapper::toResponse
            );

    return PaginationUtils.toPageResponse(response);
}

    @Override
public PoliceStationResponse getPoliceStationById(
        Long id) {

    log.info("Fetching police station with id: {}", id);

    PoliceStation policeStation = getPoliceStation(id);

    return policeStationMapper.toResponse(policeStation);
}

    @Override
@Transactional
public PoliceStationResponse updatePoliceStation(
        Long id,
        UpdatePoliceStationRequest request) {

    log.info("Updating police station with id: {}", id);

    PoliceStation policeStation = getPoliceStation(id);

    policeStationMapper.updateEntity(request, policeStation);

    PoliceStation updatedPoliceStation =
            policeStationRepository.save(policeStation);

    log.info(
            "Police station updated successfully: {}",
            updatedPoliceStation.getStationName()
    );

    return policeStationMapper.toResponse(updatedPoliceStation);
}

    @Override
@Transactional
public void deletePoliceStation(Long id) {

    log.info("Deleting police station with id: {}", id);

    PoliceStation policeStation = getPoliceStation(id);

    policeStationRepository.delete(policeStation);

    log.info(
            "Police station deleted successfully: {}",
            policeStation.getStationName()
    );
}
}
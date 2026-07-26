package com.trafikkingx.hospital.service.impl;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.common.exception.custom.HospitalNotFoundException;
import com.trafikkingx.dispatch.entity.Dispatch;
import com.trafikkingx.dispatch.repository.DispatchRepository;
import com.trafikkingx.hospital.dto.request.UpdateHospitalCaseStatusRequest;
import com.trafikkingx.hospital.dto.response.HospitalCaseResponse;
import com.trafikkingx.hospital.entity.Hospital;
import com.trafikkingx.hospital.entity.HospitalCase;
import com.trafikkingx.hospital.mapper.HospitalCaseMapper;
import com.trafikkingx.hospital.repository.HospitalCaseRepository;
import com.trafikkingx.hospital.repository.HospitalRepository;
import com.trafikkingx.hospital.service.HospitalCaseService;
import com.trafikkingx.security.currentuser.CurrentUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class HospitalCaseServiceImpl
        implements HospitalCaseService {

    private final HospitalCaseRepository hospitalCaseRepository;
    private final HospitalRepository hospitalRepository;
    private final DispatchRepository dispatchRepository;
    private final HospitalCaseMapper hospitalCaseMapper;
    private final CurrentUserService currentUserService;

    private Hospital getCurrentHospital() {

    User currentUser =
            currentUserService.getCurrentUser();

    return hospitalRepository
            .findByUser(currentUser)
            .orElseThrow(
                    HospitalNotFoundException::new
            );

}

    @Override
    @Transactional
    public HospitalCaseResponse createHospitalCase(
            Long dispatchId,
            String notes
    ) {

        log.info(
                "Creating hospital case. Dispatch={}",
                dispatchId
        );

        User currentUser =
                currentUserService.getCurrentUser();

        Hospital hospital =
                hospitalRepository.findByUser(currentUser)
                        .orElseThrow(
                                HospitalNotFoundException::new
                        );

        Dispatch dispatch =
                dispatchRepository.findById(dispatchId)
                        .orElseThrow(() ->
                                new IllegalArgumentException(
                                        "Dispatch not found."
                                )
                        );

        if (!dispatch.getHospital().getId().equals(hospital.getId())) {

            throw new IllegalArgumentException(
                    "Dispatch does not belong to current hospital."
            );

        }

        if (hospitalCaseRepository.existsByDispatch(dispatch)) {

            throw new IllegalArgumentException(
                    "Hospital case already exists."
            );

        }

        HospitalCase hospitalCase =
                HospitalCase.builder()

                        .dispatch(dispatch)

                        .hospital(hospital)

                        .acceptedBy(currentUser)

                        .acceptedAt(LocalDateTime.now())

                        .notes(notes)

                        .build();

        HospitalCase saved =
                hospitalCaseRepository.save(hospitalCase);

        log.info(
                "Hospital case created successfully. Case={}",
                saved.getId()
        );

        return hospitalCaseMapper.toResponse(saved);

    }

    @Override
public HospitalCaseResponse getHospitalCase(
        Long id
) {

    Hospital hospital = getCurrentHospital();

HospitalCase hospitalCase =
        hospitalCaseRepository
                .findByIdAndHospital(
                        id,
                        hospital
                )
                .orElseThrow(() ->
                        new IllegalArgumentException(
                                "Hospital case not found."
                        )
                );

return hospitalCaseMapper.toResponse(
        hospitalCase
);

}

@Override
@Transactional
public HospitalCaseResponse updateStatus(
        Long id,
        UpdateHospitalCaseStatusRequest request
) {

    Hospital hospital =
            getCurrentHospital();

    HospitalCase hospitalCase =
            hospitalCaseRepository
                    .findByIdAndHospital(
                            id,
                            hospital
                    )
                    .orElseThrow(() ->
                            new IllegalArgumentException(
                                    "Hospital case not found."
                            )
                    );

    hospitalCase.setStatus(
            request.getStatus()
    );

    if (request.getNotes() != null &&
            !request.getNotes().isBlank()) {

        hospitalCase.setNotes(
                request.getNotes()
        );

    }

    HospitalCase updated =
            hospitalCaseRepository.save(
                    hospitalCase
            );

    log.info(
            "Hospital case {} updated to {}",
            updated.getId(),
            updated.getStatus()
    );

    return hospitalCaseMapper.toResponse(
            updated
    );

}

}
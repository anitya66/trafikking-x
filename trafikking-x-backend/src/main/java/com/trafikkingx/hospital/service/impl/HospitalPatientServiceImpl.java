package com.trafikkingx.hospital.service.impl;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.dispatch.entity.Dispatch;
import com.trafikkingx.dispatch.enums.DispatchStatus;
import com.trafikkingx.dispatch.repository.DispatchRepository;
import com.trafikkingx.hospital.dto.request.AcceptPatientRequest;
import com.trafikkingx.hospital.dto.response.HospitalCaseResponse;
import com.trafikkingx.hospital.dto.response.IncomingPatientResponse;
import com.trafikkingx.hospital.entity.Hospital;
import com.trafikkingx.hospital.repository.HospitalRepository;
import com.trafikkingx.hospital.service.HospitalCaseService;
import com.trafikkingx.hospital.service.HospitalPatientService;
import com.trafikkingx.common.exception.custom.HospitalNotFoundException;
import com.trafikkingx.security.currentuser.CurrentUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class HospitalPatientServiceImpl
        implements HospitalPatientService {

    private final DispatchRepository dispatchRepository;
    private final CurrentUserService currentUserService;
    private final HospitalRepository hospitalRepository;
    private final HospitalCaseService hospitalCaseService;

    @Override
    public List<IncomingPatientResponse> getIncomingPatients() {

        log.info("Fetching incoming patients for current hospital");

        User currentUser = currentUserService.getCurrentUser();

        Hospital hospital = hospitalRepository
                .findByUser(currentUser)
                .orElseThrow(HospitalNotFoundException::new);

        List<Dispatch> dispatches =
                dispatchRepository.findByHospitalIdAndStatusInOrderByCreatedAtDesc(
                        hospital.getId(),
                        List.of(
                                DispatchStatus.RESOURCES_ASSIGNED,
                                DispatchStatus.DISPATCHED,
                                DispatchStatus.RESPONDING,
                                DispatchStatus.ON_SCENE
                        )
                );

       return dispatches.stream()
        .map(dispatch -> IncomingPatientResponse.builder()

                .dispatchId(
                        dispatch.getId()
                )

                .incidentNumber(
                        dispatch.getIncident().getIncidentNumber()
                )

                .patientName(
                        dispatch.getIncident()
                                .getCitizenProfile()
                                .getUser()
                                .getFullName()
                )

                .incidentType(
                        dispatch.getIncident()
                                .getIncidentType()
                                .name()
                )

                .severity(
                        dispatch.getIncident()
                                .getSeverity()
                                .name()
                )

                .etaMinutes(5)

                .build())
        .toList();
    }

@Override
public HospitalCaseResponse acceptPatient(
        Long dispatchId,
        AcceptPatientRequest request
) {

    log.info(
            "Hospital accepted patient. Dispatch={}",
            dispatchId
    );

    return hospitalCaseService.createHospitalCase(
            dispatchId,
            request.getNotes()
    );

}

}
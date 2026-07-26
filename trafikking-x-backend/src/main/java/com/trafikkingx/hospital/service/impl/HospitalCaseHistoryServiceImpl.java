package com.trafikkingx.hospital.service.impl;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.common.exception.custom.HospitalNotFoundException;
import com.trafikkingx.hospital.dto.response.HospitalCaseResponse;
import com.trafikkingx.hospital.entity.Hospital;
import com.trafikkingx.hospital.mapper.HospitalCaseMapper;
import com.trafikkingx.hospital.repository.HospitalCaseRepository;
import com.trafikkingx.hospital.repository.HospitalRepository;
import com.trafikkingx.hospital.service.HospitalCaseHistoryService;
import com.trafikkingx.security.currentuser.CurrentUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class HospitalCaseHistoryServiceImpl
        implements HospitalCaseHistoryService {

    private final HospitalRepository hospitalRepository;
    private final HospitalCaseRepository hospitalCaseRepository;
    private final HospitalCaseMapper hospitalCaseMapper;
    private final CurrentUserService currentUserService;

    @Override
    public List<HospitalCaseResponse> getHistory() {

        User currentUser =
                currentUserService.getCurrentUser();

        Hospital hospital =
                hospitalRepository.findByUser(currentUser)
                        .orElseThrow(
                                HospitalNotFoundException::new
                        );

        log.info(
                "Fetching hospital history. Hospital={}",
                hospital.getHospitalName()
        );

        return hospitalCaseRepository
                .findByHospitalOrderByAcceptedAtDesc(
                        hospital
                )
                .stream()
                .map(hospitalCaseMapper::toResponse)
                .toList();
    }

}
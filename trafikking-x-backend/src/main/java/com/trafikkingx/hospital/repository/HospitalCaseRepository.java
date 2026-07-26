package com.trafikkingx.hospital.repository;

import com.trafikkingx.dispatch.entity.Dispatch;
import com.trafikkingx.hospital.entity.Hospital;
import com.trafikkingx.hospital.entity.HospitalCase;
import com.trafikkingx.hospital.enums.HospitalCaseStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HospitalCaseRepository
        extends JpaRepository<HospitalCase, Long> {

    Optional<HospitalCase> findByDispatch(
            Dispatch dispatch
    );

    boolean existsByDispatch(
            Dispatch dispatch
    );

    List<HospitalCase> findByHospitalOrderByCreatedAtDesc(
            Hospital hospital
    );

    List<HospitalCase> findByHospitalAndStatusOrderByCreatedAtDesc(
            Hospital hospital,
            HospitalCaseStatus status
    );

    List<HospitalCase> findByHospitalOrderByAcceptedAtDesc(
        Hospital hospital
);

Optional<HospitalCase> findByIdAndHospital(
        Long id,
        Hospital hospital
);

}
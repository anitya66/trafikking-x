package com.trafikkingx.assignment.strategy;

import com.trafikkingx.assignment.enums.ResourceType;
import com.trafikkingx.assignment.model.ResourceCandidate;
import com.trafikkingx.assignment.util.GeoLocationUtil;
import com.trafikkingx.hospital.entity.Hospital;
import com.trafikkingx.hospital.repository.HospitalRepository;
import com.trafikkingx.incident.entity.Incident;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class HospitalAssignmentStrategy
        extends AbstractAssignmentStrategy<Hospital> {

    private final HospitalRepository hospitalRepository;

    @Override
    protected List<Hospital> getResources() {

        log.info("Loading hospitals...");

        return hospitalRepository.findAll();
    }

    @Override
    protected boolean isEligible(
            Hospital hospital) {

        return Boolean.TRUE.equals(hospital.getActive())
                && Boolean.TRUE.equals(hospital.getEmergencyAvailable())
                && hospital.getAvailableBeds() > 0;
    }

    @Override
protected ResourceCandidate toCandidate(
        Hospital hospital,
        Incident incident) {

    double distance =
            GeoLocationUtil.calculateDistance(

                    incident.getLatitude(),

                    incident.getLongitude(),

                    hospital.getLatitude(),

                    hospital.getLongitude()
            );

    return ResourceCandidate.builder()
            .id(hospital.getId())
            .name(hospital.getHospitalName())
            .distance(distance)
            .score(distance)
            .build();
}

@Override
public ResourceType getResourceType() {

    return ResourceType.HOSPITAL;
}
}
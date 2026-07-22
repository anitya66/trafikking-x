package com.trafikkingx.assignment.strategy;

import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.ambulance.enums.AmbulanceStatus;
import com.trafikkingx.ambulance.repository.AmbulanceRepository;
import com.trafikkingx.assignment.enums.ResourceType;
import com.trafikkingx.assignment.model.ResourceCandidate;
import com.trafikkingx.assignment.util.GeoLocationUtil;
import com.trafikkingx.incident.entity.Incident;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class AmbulanceAssignmentStrategy
        extends AbstractAssignmentStrategy<Ambulance> {

    private final AmbulanceRepository ambulanceRepository;

    @Override
    protected List<Ambulance> getResources() {

        log.info("Loading ambulances...");

        return ambulanceRepository.findAll();
    }

    @Override
    protected boolean isEligible(
            Ambulance ambulance) {

        return Boolean.TRUE.equals(ambulance.getActive())
                && ambulance.getStatus() == AmbulanceStatus.AVAILABLE;
    }

    @Override
protected ResourceCandidate toCandidate(
        Ambulance ambulance,
        Incident incident) {

    double distance =
            GeoLocationUtil.calculateDistance(

                    incident.getLatitude(),

                    incident.getLongitude(),

                    ambulance.getCurrentLatitude(),

                    ambulance.getCurrentLongitude()
            );

    return ResourceCandidate.builder()
            .id(ambulance.getId())
            .name(ambulance.getVehicleNumber())
            .distance(distance)
            .score(distance)
            .build();
}

@Override
public ResourceType getResourceType() {

    return ResourceType.AMBULANCE;
}
}
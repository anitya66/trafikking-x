package com.trafikkingx.assignment.strategy;

import com.trafikkingx.assignment.enums.ResourceType;
import com.trafikkingx.assignment.model.ResourceCandidate;
import com.trafikkingx.assignment.util.GeoLocationUtil;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.police.entity.PoliceStation;
import com.trafikkingx.police.repository.PoliceStationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class PoliceAssignmentStrategy
        extends AbstractAssignmentStrategy<PoliceStation> {

    private final PoliceStationRepository policeStationRepository;

    @Override
    protected List<PoliceStation> getResources() {

        log.info("Loading police stations...");

        return policeStationRepository.findAll();
    }

    @Override
    protected boolean isEligible(
            PoliceStation policeStation) {

        return Boolean.TRUE.equals(policeStation.getActive());
    }

    @Override
protected ResourceCandidate toCandidate(
        PoliceStation policeStation,
        Incident incident) {

    double distance =
            GeoLocationUtil.calculateDistance(

                    incident.getLatitude(),

                    incident.getLongitude(),

                    policeStation.getLatitude(),

                    policeStation.getLongitude()
            );

    return ResourceCandidate.builder()
            .id(policeStation.getId())
            .name(policeStation.getStationName())
            .distance(distance)
            .score(distance)
            .build();
}

@Override
public ResourceType getResourceType() {

    return ResourceType.POLICE;
}
}
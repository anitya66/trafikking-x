package com.trafikkingx.map.service.impl;

import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.ambulance.repository.AmbulanceRepository;
import com.trafikkingx.hospital.entity.Hospital;
import com.trafikkingx.hospital.repository.HospitalRepository;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.incident.repository.IncidentRepository;
import com.trafikkingx.map.dto.response.MapMarkerResponse;
import com.trafikkingx.map.dto.response.MapOverviewResponse;
import com.trafikkingx.map.service.MapService;
import com.trafikkingx.police.entity.PoliceStation;
import com.trafikkingx.police.repository.PoliceStationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MapServiceImpl implements MapService {

    private final IncidentRepository incidentRepository;

    private final HospitalRepository hospitalRepository;

    private final AmbulanceRepository ambulanceRepository;

    private final PoliceStationRepository policeStationRepository;

    @Override
    public MapOverviewResponse getMapOverview() {

        List<MapMarkerResponse> incidents =
                incidentRepository.findAll()
                        .stream()
                        .filter(i ->
                                i.getLatitude() != null &&
                                i.getLongitude() != null
                        )
                        .map(this::toIncidentMarker)
                        .toList();

        List<MapMarkerResponse> hospitals =
                hospitalRepository.findByEmergencyAvailableTrue()
                        .stream()
                        .filter(h ->
                                h.getLatitude() != null &&
                                h.getLongitude() != null
                        )
                        .map(this::toHospitalMarker)
                        .toList();

        List<MapMarkerResponse> ambulances =
                ambulanceRepository.findByActiveTrue()
                        .stream()
                        .filter(a ->
                                a.getCurrentLatitude() != null &&
                                a.getCurrentLongitude() != null
                        )
                        .map(this::toAmbulanceMarker)
                        .toList();

        List<MapMarkerResponse> policeStations =
                policeStationRepository.findByActiveTrue(
                                org.springframework.data.domain.Pageable.unpaged()
                        )
                        .getContent()
                        .stream()
                        .filter(p ->
                                p.getLatitude() != null &&
                                p.getLongitude() != null
                        )
                        .map(this::toPoliceMarker)
                        .toList();

        return MapOverviewResponse.builder()
                .incidents(incidents)
                .hospitals(hospitals)
                .ambulances(ambulances)
                .policeStations(policeStations)
                .build();
    }

    private MapMarkerResponse toIncidentMarker(Incident incident) {

        return MapMarkerResponse.builder()
                .id(incident.getId())
                .title(incident.getIncidentType().name())
                .latitude(incident.getLatitude())
                .longitude(incident.getLongitude())
                .type("INCIDENT")
                .status(incident.getStatus().name())
                .severity(incident.getSeverity().name())
                .build();
    }

    private MapMarkerResponse toHospitalMarker(Hospital hospital) {

        return MapMarkerResponse.builder()
                .id(hospital.getId())
                .title(hospital.getHospitalName())
                .latitude(hospital.getLatitude())
                .longitude(hospital.getLongitude())
                .type("HOSPITAL")
                .status(
                        hospital.getEmergencyAvailable()
                                ? "AVAILABLE"
                                : "UNAVAILABLE"
                )
                .build();
    }

    private MapMarkerResponse toAmbulanceMarker(Ambulance ambulance) {

        return MapMarkerResponse.builder()
                .id(ambulance.getId())
                .title(ambulance.getVehicleNumber())
                .latitude(ambulance.getCurrentLatitude())
                .longitude(ambulance.getCurrentLongitude())
                .type("AMBULANCE")
                .status(ambulance.getStatus().name())
                .build();
    }

    private MapMarkerResponse toPoliceMarker(PoliceStation policeStation) {

        return MapMarkerResponse.builder()
                .id(policeStation.getId())
                .title(policeStation.getStationName())
                .latitude(policeStation.getLatitude())
                .longitude(policeStation.getLongitude())
                .type("POLICE")
                .status("ACTIVE")
                .build();
    }
}
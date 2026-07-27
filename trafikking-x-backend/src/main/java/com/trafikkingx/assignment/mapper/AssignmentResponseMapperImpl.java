package com.trafikkingx.assignment.mapper;

import com.trafikkingx.assignment.dto.response.AssignmentResponse;
import com.trafikkingx.recommendation.model.RecommendationResult;
import com.trafikkingx.recommendation.model.RecommendedResource;
import org.springframework.stereotype.Component;

@Component
public class AssignmentResponseMapperImpl
        implements AssignmentResponseMapper {

    @Override
    public AssignmentResponse toResponse(
            RecommendationResult recommendation
    ) {

        RecommendedResource hospital =
                recommendation.getHospital();

        RecommendedResource ambulance =
                recommendation.getAmbulance();

        RecommendedResource police =
                recommendation.getPolice();

        return AssignmentResponse.builder()

                .incidentId(
                        recommendation.getIncidentId()
                )

                // ---------------- Hospital ----------------

                .hospitalId(
                        hospital != null
                                ? hospital.getId()
                                : null
                )

                .hospitalName(
                        hospital != null
                                ? hospital.getName()
                                : null
                )

                .hospitalDistance(
                        hospital != null
                                ? hospital.getDistance()
                                : null
                )

                .hospitalEtaMinutes(
                        hospital != null
                                ? hospital.getEtaMinutes()
                                : null
                )

                .hospitalConfidence(
                        hospital != null &&
                                hospital.getScore() != null
                                ? Math.min(
                                        99,
                                        hospital.getScore().intValue()
                                )
                                : null
                )

                .hospitalReason(
                        hospital != null
                                ? hospital.getReason()
                                : null
                )

                // ---------------- Ambulance ----------------

                .ambulanceId(
                        ambulance != null
                                ? ambulance.getId()
                                : null
                )

                .vehicleNumber(
                        ambulance != null
                                ? ambulance.getName()
                                : null
                )

                .ambulanceDistance(
                        ambulance != null
                                ? ambulance.getDistance()
                                : null
                )

                .ambulanceEtaMinutes(
                        ambulance != null
                                ? ambulance.getEtaMinutes()
                                : null
                )

                .ambulanceConfidence(
                        ambulance != null &&
                                ambulance.getScore() != null
                                ? Math.min(
                                        99,
                                        ambulance.getScore().intValue()
                                )
                                : null
                )

                .ambulanceReason(
                        ambulance != null
                                ? ambulance.getReason()
                                : null
                )

                // ---------------- Police ----------------

                .policeStationId(
                        police != null
                                ? police.getId()
                                : null
                )

                .policeStationName(
                        police != null
                                ? police.getName()
                                : null
                )

                .policeDistance(
                        police != null
                                ? police.getDistance()
                                : null
                )

                .policeEtaMinutes(
                        police != null
                                ? police.getEtaMinutes()
                                : null
                )

                .policeConfidence(
                        police != null &&
                                police.getScore() != null
                                ? Math.min(
                                        99,
                                        police.getScore().intValue()
                                )
                                : null
                )

                .policeReason(
                        police != null
                                ? police.getReason()
                                : null
                )

                .build();
    }

}
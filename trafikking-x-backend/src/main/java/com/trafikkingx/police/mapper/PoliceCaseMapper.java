package com.trafikkingx.police.mapper;

import com.trafikkingx.police.dto.response.PoliceCaseResponse;
import com.trafikkingx.police.entity.PoliceCase;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PoliceCaseMapper {

    @Mapping(target = "dispatchId", source = "dispatch.id")

    @Mapping(target = "incidentNumber", source = "dispatch.incident.incidentNumber")

    @Mapping(target = "citizenName", source = "dispatch.incident.citizenProfile.user.fullName")

    @Mapping(
            target = "citizenPhoneNumber",
            source = "dispatch.incident.citizenProfile.user.phoneNumber"
    )

    @Mapping(target = "incidentType", source = "dispatch.incident.incidentType")

    @Mapping(target = "severity", source = "dispatch.incident.severity")

    @Mapping(
            target = "incidentLocation",
            source = "dispatch.incident.address"
    )

    @Mapping(
            target = "incidentDescription",
            source = "dispatch.incident.description"
    )

    @Mapping(
            target = "incidentReportedAt",
            source = "dispatch.incident.reportedAt"
    )

    @Mapping(
            target = "policeStationName",
            source = "policeStation.stationName"
    )

    @Mapping(target = "acceptedAt", source = "acceptedAt")

    @Mapping(target = "status", source = "status")

    @Mapping(target = "notes", source = "notes")

    PoliceCaseResponse toResponse(PoliceCase policeCase);

}
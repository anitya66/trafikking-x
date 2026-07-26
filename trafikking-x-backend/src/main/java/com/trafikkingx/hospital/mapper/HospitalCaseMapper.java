package com.trafikkingx.hospital.mapper;

import com.trafikkingx.hospital.dto.response.HospitalCaseResponse;
import com.trafikkingx.hospital.entity.HospitalCase;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface HospitalCaseMapper {

    @Mapping(target = "dispatchId", source = "dispatch.id")
    @Mapping(target = "incidentNumber", source = "dispatch.incident.incidentNumber")
    @Mapping(target = "patientName", source = "dispatch.incident.citizenProfile.user.fullName")
    @Mapping(target = "hospitalName", source = "hospital.hospitalName")
    @Mapping(target = "incidentType",source = "dispatch.incident.incidentType")
    @Mapping(target = "notes", source = "notes")
    HospitalCaseResponse toResponse(
            HospitalCase hospitalCase
    );

}
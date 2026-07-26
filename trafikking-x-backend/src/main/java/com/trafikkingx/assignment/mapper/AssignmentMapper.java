package com.trafikkingx.assignment.mapper;

import com.trafikkingx.assignment.dto.response.AssignmentDetailsResponse;
import com.trafikkingx.assignment.entity.Assignment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AssignmentMapper {

    @Mapping(
            target = "assignmentId",
            source = "id"
    )
    @Mapping(
            target = "incidentId",
            source = "incident.id"
    )
    @Mapping(
            target = "incidentNumber",
            source = "incident.incidentNumber"
    )
    @Mapping(
            target = "citizenName",
            source = "incident.citizenProfile.user.fullName"
    )
    @Mapping(
        target = "emergencyType",
        source = "incident.incidentType"
)
    @Mapping(
            target = "vehicleNumber",
            source = "ambulance.vehicleNumber"
    )
    AssignmentDetailsResponse toResponse(
            Assignment assignment
    );

}
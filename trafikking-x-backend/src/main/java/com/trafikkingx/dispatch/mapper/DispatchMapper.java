package com.trafikkingx.dispatch.mapper;

import com.trafikkingx.dispatch.dto.request.CreateDispatchRequest;
import com.trafikkingx.dispatch.dto.response.DispatchResponse;
import com.trafikkingx.dispatch.entity.Dispatch;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface DispatchMapper {

    @Mapping(target = "incident", ignore = true)
    @Mapping(target = "hospital", ignore = true)
    @Mapping(target = "ambulance", ignore = true)
    @Mapping(target = "policeStation", ignore = true)
    Dispatch toEntity(CreateDispatchRequest request);

    @Mapping(source = "incident.id", target = "incidentId")
    @Mapping(source = "hospital.id", target = "hospitalId")
    @Mapping(source = "ambulance.id", target = "ambulanceId")
    @Mapping(source = "policeStation.id", target = "policeStationId")
    DispatchResponse toResponse(Dispatch dispatch);
}
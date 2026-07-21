package com.trafikkingx.police.mapper;

import com.trafikkingx.police.dto.request.CreatePoliceStationRequest;
import com.trafikkingx.police.dto.request.UpdatePoliceStationRequest;
import com.trafikkingx.police.dto.response.PoliceStationResponse;
import com.trafikkingx.police.entity.PoliceStation;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface PoliceStationMapper {

    PoliceStation toEntity(CreatePoliceStationRequest request);

    PoliceStationResponse toResponse(PoliceStation policeStation);

    @BeanMapping(
            nullValuePropertyMappingStrategy =
                    NullValuePropertyMappingStrategy.IGNORE
    )
    void updateEntity(
            UpdatePoliceStationRequest request,
            @MappingTarget PoliceStation policeStation
    );
}
package com.trafikkingx.ambulance.mapper;

import com.trafikkingx.ambulance.dto.request.CreateAmbulanceRequest;
import com.trafikkingx.ambulance.dto.request.UpdateAmbulanceRequest;
import com.trafikkingx.ambulance.dto.response.AmbulanceResponse;
import com.trafikkingx.ambulance.entity.Ambulance;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface AmbulanceMapper {

    Ambulance toEntity(CreateAmbulanceRequest request);

    AmbulanceResponse toResponse(Ambulance ambulance);

    @BeanMapping(
            nullValuePropertyMappingStrategy =
                    NullValuePropertyMappingStrategy.IGNORE
    )
    void updateEntity(
            UpdateAmbulanceRequest request,
            @MappingTarget Ambulance ambulance
    );
}
package com.trafikkingx.citizen.mapper;

import com.trafikkingx.citizen.dto.request.CreateCitizenProfileRequest;
import com.trafikkingx.citizen.dto.request.UpdateCitizenProfileRequest;
import com.trafikkingx.citizen.dto.response.CitizenProfileResponse;
import com.trafikkingx.citizen.entity.CitizenProfile;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface CitizenProfileMapper {

    CitizenProfile toEntity(CreateCitizenProfileRequest request);

    CitizenProfileResponse toResponse(CitizenProfile citizenProfile);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateEntity(
            UpdateCitizenProfileRequest request,
            @MappingTarget CitizenProfile citizenProfile
    );
}
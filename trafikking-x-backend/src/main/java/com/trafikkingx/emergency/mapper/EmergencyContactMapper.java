package com.trafikkingx.emergency.mapper;

import com.trafikkingx.emergency.dto.request.CreateEmergencyContactRequest;
import com.trafikkingx.emergency.dto.request.UpdateEmergencyContactRequest;
import com.trafikkingx.emergency.dto.response.EmergencyContactResponse;
import com.trafikkingx.emergency.entity.EmergencyContact;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface EmergencyContactMapper {

    EmergencyContact toEntity(CreateEmergencyContactRequest request);

    EmergencyContactResponse toResponse(EmergencyContact emergencyContact);

    @BeanMapping(
            nullValuePropertyMappingStrategy =
                    NullValuePropertyMappingStrategy.IGNORE
    )
    void updateEntity(
            UpdateEmergencyContactRequest request,
            @MappingTarget EmergencyContact emergencyContact
    );
}
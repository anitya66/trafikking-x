package com.trafikkingx.incident.mapper;

import com.trafikkingx.incident.dto.request.CreateIncidentRequest;
import com.trafikkingx.incident.dto.request.UpdateIncidentRequest;
import com.trafikkingx.incident.dto.response.IncidentResponse;
import com.trafikkingx.incident.entity.Incident;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface IncidentMapper {

    Incident toEntity(CreateIncidentRequest request);

    IncidentResponse toResponse(Incident incident);

    @BeanMapping(
            nullValuePropertyMappingStrategy =
                    NullValuePropertyMappingStrategy.IGNORE
    )
    void updateEntity(
            UpdateIncidentRequest request,
            @MappingTarget Incident incident
    );
}
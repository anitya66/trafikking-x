package com.trafikkingx.dispatcher.mapper;

import com.trafikkingx.dispatcher.dto.request.CreateDispatcherRequest;
import com.trafikkingx.dispatcher.dto.request.UpdateDispatcherRequest;
import com.trafikkingx.dispatcher.dto.response.DispatcherResponse;
import com.trafikkingx.dispatcher.entity.Dispatcher;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface DispatcherMapper {

    @Mapping(target = "user", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "active", ignore = true)
    Dispatcher toEntity(CreateDispatcherRequest request);

    @Mapping(target = "userId", source = "user.id")
    @Mapping(target = "fullName", source = "user.fullName")
    @Mapping(target = "email", source = "user.email")
    DispatcherResponse toResponse(Dispatcher dispatcher);

    @Mapping(target = "employeeId", ignore = true)
    @Mapping(target = "user", ignore = true)
    void updateEntity(
            UpdateDispatcherRequest request,
            @MappingTarget Dispatcher dispatcher
    );
}
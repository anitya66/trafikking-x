package com.trafikkingx.notification.mapper;

import com.trafikkingx.notification.dto.NotificationResponse;
import com.trafikkingx.notification.entity.Notification;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface NotificationMapper {

    @Mapping(target = "incidentId", source = "incident.id")
    NotificationResponse toResponse(Notification notification);
}
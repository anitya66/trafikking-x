package com.trafikkingx.account.mapper;

import com.trafikkingx.account.dto.response.ProfileResponse;
import com.trafikkingx.auth.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AccountMapper {

    @Mapping(target = "role", expression = "java(user.getRole().name())")
    ProfileResponse toProfileResponse(User user);

}
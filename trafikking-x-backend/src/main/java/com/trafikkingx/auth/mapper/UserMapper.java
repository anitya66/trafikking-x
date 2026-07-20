package com.trafikkingx.auth.mapper;

import com.trafikkingx.auth.dto.response.CurrentUserResponse;
import com.trafikkingx.auth.dto.response.LoginResponse;
import com.trafikkingx.auth.dto.response.RegisterResponse;
import com.trafikkingx.auth.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    RegisterResponse toRegisterResponse(User user);

    LoginResponse toLoginResponse(User user);

    CurrentUserResponse toCurrentUserResponse(User user);

}
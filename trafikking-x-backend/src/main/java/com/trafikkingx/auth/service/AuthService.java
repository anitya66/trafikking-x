package com.trafikkingx.auth.service;

import com.trafikkingx.auth.dto.request.LoginRequest;
import com.trafikkingx.auth.dto.request.RegisterRequest;
import com.trafikkingx.auth.dto.response.CurrentUserResponse;
import com.trafikkingx.auth.dto.response.LoginResponse;
import com.trafikkingx.auth.dto.response.RegisterResponse;


public interface AuthService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    CurrentUserResponse getCurrentUser();

}
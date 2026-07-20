package com.trafikkingx.auth.controller;

import com.trafikkingx.auth.dto.request.LoginRequest;
import com.trafikkingx.auth.dto.request.RegisterRequest;
import com.trafikkingx.auth.dto.response.CurrentUserResponse;
import com.trafikkingx.auth.dto.response.LoginResponse;
import com.trafikkingx.auth.dto.response.RegisterResponse;
import com.trafikkingx.auth.service.AuthService;
import com.trafikkingx.common.response.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ApiResponse<RegisterResponse> register(
            @Valid @RequestBody RegisterRequest request) {

        RegisterResponse response = authService.register(request);

        return ApiResponse.<RegisterResponse>builder()
                .success(true)
                .message("User registered successfully")
                .data(response)
                .build();
    }

    @PostMapping("/login")
    public ApiResponse<LoginResponse> login(
            @Valid @RequestBody LoginRequest request) {

        LoginResponse response = authService.login(request);

        return ApiResponse.<LoginResponse>builder()
                .success(true)
                .message("Login successful")
                .data(response)
                .build();
    }

    @GetMapping("/me")
    public ApiResponse<CurrentUserResponse> getCurrentUser() {

        CurrentUserResponse response = authService.getCurrentUser();

        return ApiResponse.<CurrentUserResponse>builder()
                .success(true)
                .message("Current user fetched successfully")
                .data(response)
                .build();
    }
}
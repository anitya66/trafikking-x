package com.trafikkingx.auth.service.impl;

import com.trafikkingx.auth.dto.request.LoginRequest;
import com.trafikkingx.auth.dto.request.RegisterRequest;
import com.trafikkingx.auth.dto.response.CurrentUserResponse;
import com.trafikkingx.auth.dto.response.LoginResponse;
import com.trafikkingx.auth.dto.response.RegisterResponse;
import com.trafikkingx.auth.entity.User;
import org.springframework.transaction.annotation.Transactional;
import com.trafikkingx.auth.mapper.UserMapper;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.auth.service.AuthService;
import com.trafikkingx.auth.enums.Role;
import com.trafikkingx.citizen.entity.CitizenProfile;
import com.trafikkingx.citizen.repository.CitizenProfileRepository;
import com.trafikkingx.common.exception.custom.EmailAlreadyExistsException;
import com.trafikkingx.common.exception.custom.InvalidCredentialsException;
import com.trafikkingx.common.exception.custom.PhoneAlreadyExistsException;
import com.trafikkingx.security.jwt.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
    private final JwtService jwtService;
    private final CitizenProfileRepository citizenProfileRepository;

@Transactional
@Override
public RegisterResponse register(RegisterRequest request) {

        log.info("Register request received for email: {}", request.getEmail());

        if (userRepository.existsByEmail(request.getEmail())) {
            log.warn("Registration failed. Email already exists: {}", request.getEmail());
            throw new EmailAlreadyExistsException(request.getEmail());
        }

        if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            log.warn("Registration failed. Phone number already exists: {}", request.getPhoneNumber());
            throw new PhoneAlreadyExistsException(request.getPhoneNumber());
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .phoneNumber(request.getPhoneNumber())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .build();

        User savedUser = userRepository.save(user);

if (savedUser.getRole() == Role.CITIZEN) {

    CitizenProfile citizenProfile = CitizenProfile.builder()
            .user(savedUser)
            .organDonor(false)
            .build();

    citizenProfileRepository.save(citizenProfile);

    log.info(
            "Citizen profile created for user: {}",
            savedUser.getEmail()
    );
}

log.info(
        "User registered successfully: {}",
        savedUser.getEmail()
);

return userMapper.toRegisterResponse(savedUser);
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        log.info("Login request received for email: {}", request.getEmail());

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> {
                    log.warn("Login failed. User not found: {}", request.getEmail());
                    return new InvalidCredentialsException();
                });

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {

            log.warn("Login failed. Invalid password for: {}", request.getEmail());

            throw new InvalidCredentialsException();
        }

        LoginResponse response = userMapper.toLoginResponse(user);

        response.setAccessToken(jwtService.generateToken(user));
        response.setTokenType("Bearer");

        log.info("JWT generated successfully for user: {}", user.getEmail());
        log.info("Login successful for user: {}", user.getEmail());

        return response;
    }

    @Override
    public CurrentUserResponse getCurrentUser() {

        log.info("Fetching current authenticated user");

        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> {
                    log.error("Authenticated user not found in database: {}", email);
                    return new UsernameNotFoundException("User not found");
                });

        log.info("Current user fetched successfully: {}", email);

        return userMapper.toCurrentUserResponse(user);
    }
}
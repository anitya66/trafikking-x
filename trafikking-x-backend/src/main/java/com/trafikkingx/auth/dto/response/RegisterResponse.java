package com.trafikkingx.auth.dto.response;

import com.trafikkingx.auth.enums.Role;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterResponse {

    private Long id;

    private String fullName;

    private String email;

    private String phoneNumber;

    private Role role;

    private boolean active;

    private boolean emailVerified;

    private boolean profileCompleted;
}
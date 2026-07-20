package com.trafikkingx.auth.dto.response;

import com.trafikkingx.auth.enums.Role;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {

    private String accessToken;

    private String tokenType;

    private Long id;

    private String fullName;

    private String email;

    private Role role;

    private boolean active;

    private boolean emailVerified;

    private boolean profileCompleted;
}
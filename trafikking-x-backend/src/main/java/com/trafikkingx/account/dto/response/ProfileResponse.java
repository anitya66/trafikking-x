package com.trafikkingx.account.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ProfileResponse {

    private Long id;

    private String fullName;

    private String email;

    private String phoneNumber;

    private String profileImage;

    private String bio;

    private String address;

    private String organization;

    private String role;

}
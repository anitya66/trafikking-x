package com.trafikkingx.account.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateProfileRequest {

    @NotBlank(message = "Full name is required.")
    @Size(max = 100)
    private String fullName;

    @NotBlank(message = "Phone number is required.")
    @Pattern(
            regexp = "^[6-9]\\d{9}$",
            message = "Enter a valid phone number."
    )
    private String phoneNumber;

    @Size(max = 500)
    private String bio;

    @Size(max = 255)
    private String address;

    @Size(max = 255)
    private String organization;

}
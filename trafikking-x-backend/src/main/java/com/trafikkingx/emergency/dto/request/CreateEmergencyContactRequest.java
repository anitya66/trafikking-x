package com.trafikkingx.emergency.dto.request;

import com.trafikkingx.emergency.enums.Relationship;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateEmergencyContactRequest {

    @NotBlank
    private String contactName;

    @NotBlank
    @Pattern(
            regexp = "^[6-9]\\d{9}$",
            message = "Phone number must be a valid 10-digit Indian mobile number"
    )
    private String contactPhone;

    @NotNull
    private Relationship relationship;

    @NotNull
    private Integer priority;

    @Builder.Default
    private Boolean primaryContact = false;
}
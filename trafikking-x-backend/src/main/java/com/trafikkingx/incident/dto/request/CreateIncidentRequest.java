package com.trafikkingx.incident.dto.request;

import com.trafikkingx.incident.enums.IncidentType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateIncidentRequest {

    @NotNull
    private IncidentType incidentType;

    @NotBlank
    private String description;

    @NotNull
    private Double latitude;

    @NotNull
    private Double longitude;

    @NotBlank
    private String address;
}
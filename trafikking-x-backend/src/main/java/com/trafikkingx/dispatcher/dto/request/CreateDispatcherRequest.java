package com.trafikkingx.dispatcher.dto.request;

import com.trafikkingx.dispatcher.enums.ShiftType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateDispatcherRequest {

    @NotBlank
    private String employeeId;

    @NotNull
    private Long userId;

    @NotBlank
    private String zone;

    @NotNull
    private ShiftType shift;
}
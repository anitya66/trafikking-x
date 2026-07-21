package com.trafikkingx.dispatch.dto.request;

import com.trafikkingx.dispatch.enums.DispatchStatus;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateDispatchStatusRequest {

    @NotNull
    private DispatchStatus status;
}
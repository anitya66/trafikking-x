package com.trafikkingx.dispatch.dto.request;

import com.trafikkingx.dispatch.enums.EmergencyPriority;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateDispatchRequest {

    @NotNull
    private Long incidentId;

    @NotNull
    private EmergencyPriority priority;

    private String dispatcherNotes;
}
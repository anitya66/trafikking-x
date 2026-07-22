package com.trafikkingx.dispatcher.dto.request;

import com.trafikkingx.dispatcher.enums.DispatcherStatus;
import com.trafikkingx.dispatcher.enums.ShiftType;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateDispatcherRequest {

    private String zone;

    private ShiftType shift;

    private DispatcherStatus status;

    private Boolean active;
}
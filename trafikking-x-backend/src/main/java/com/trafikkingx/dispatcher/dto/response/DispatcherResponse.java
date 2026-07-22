package com.trafikkingx.dispatcher.dto.response;

import com.trafikkingx.dispatcher.enums.DispatcherStatus;
import com.trafikkingx.dispatcher.enums.ShiftType;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DispatcherResponse {

    private Long id;

    private String employeeId;

    private Long userId;

    private String fullName;

    private String email;

    private String zone;

    private ShiftType shift;

    private DispatcherStatus status;

    private Boolean active;
}
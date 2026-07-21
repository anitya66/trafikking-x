package com.trafikkingx.emergency.dto.request;

import com.trafikkingx.emergency.enums.Relationship;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateEmergencyContactRequest {

    private String contactName;

    private String contactPhone;

    private Relationship relationship;

    private Integer priority;

    private Boolean primaryContact;
}
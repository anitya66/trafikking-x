package com.trafikkingx.emergency.dto.response;

import com.trafikkingx.emergency.enums.Relationship;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmergencyContactResponse {

    private Long id;

    private String contactName;

    private String contactPhone;

    private Relationship relationship;

    private Integer priority;

    private Boolean primaryContact;
}
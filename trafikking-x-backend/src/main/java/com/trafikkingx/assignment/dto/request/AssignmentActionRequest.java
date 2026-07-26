package com.trafikkingx.assignment.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentActionRequest {

    @NotBlank
    private String remarks;

}
package com.trafikkingx.police.dto.request;

import com.trafikkingx.police.enums.PoliceCaseStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UpdatePoliceCaseStatusRequest {

    @NotNull
    private PoliceCaseStatus status;

    private String notes;

}
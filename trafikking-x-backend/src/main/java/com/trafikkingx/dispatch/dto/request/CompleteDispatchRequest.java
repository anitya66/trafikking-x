package com.trafikkingx.dispatch.dto.request;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CompleteDispatchRequest {

    private String dispatcherNotes;
}
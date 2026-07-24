package com.trafikkingx.tracking.dto.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TimelineEventResponse {

    private String title;

    private String description;

    private LocalDateTime timestamp;

}
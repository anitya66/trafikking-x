package com.trafikkingx.hospital.dto.response;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AIRecommendationResponse {

    private String title;

    private String recommendation;

    private String priority;

}
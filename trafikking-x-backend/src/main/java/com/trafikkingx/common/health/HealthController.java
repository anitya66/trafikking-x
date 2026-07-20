package com.trafikkingx.common.health;

import com.trafikkingx.common.response.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/api/v1/test/health")
    public ApiResponse<String> health() {

        return ApiResponse.<String>builder()
                .success(true)
                .message("Backend is running successfully")
                .data("Welcome to TRAFIKKING X 🚑")
                .build();
    }
    @GetMapping("/api/v1/test/error")
public String error() {
    throw new RuntimeException("Testing Global Exception Handler");
}
@GetMapping("/api/v1/test/secure")
public String secure() {
    return "Protected Endpoint";
}

}
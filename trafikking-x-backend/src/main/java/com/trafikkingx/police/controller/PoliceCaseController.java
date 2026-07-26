package com.trafikkingx.police.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.police.dto.request.AcceptPoliceCaseRequest;
import com.trafikkingx.police.dto.request.UpdatePoliceCaseStatusRequest;
import com.trafikkingx.police.dto.response.IncomingPoliceCaseResponse;
import com.trafikkingx.police.dto.response.PoliceCaseResponse;
import com.trafikkingx.police.service.PoliceCaseService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/police/cases")
@RequiredArgsConstructor
public class PoliceCaseController {

    private final PoliceCaseService policeCaseService;

    @GetMapping
    public ApiResponse<List<IncomingPoliceCaseResponse>>
    getIncomingCases() {

        return ApiResponse
                .<List<IncomingPoliceCaseResponse>>builder()
                .success(true)
                .message("Incoming police cases fetched successfully")
                .data(policeCaseService.getIncomingCases())
                .build();

    }

    @PutMapping("/{dispatchId}/accept")
    public ApiResponse<PoliceCaseResponse>
    acceptCase(

            @PathVariable Long dispatchId,

            @Valid
            @RequestBody
            AcceptPoliceCaseRequest request

    ) {

        return ApiResponse
                .<PoliceCaseResponse>builder()
                .success(true)
                .message("Police case accepted successfully")
                .data(
                        policeCaseService.acceptCase(
                                dispatchId,
                                request
                        )
                )
                .build();

    }

    @GetMapping("/{id}")
    public ApiResponse<PoliceCaseResponse>
    getPoliceCase(
            @PathVariable Long id
    ) {

        return ApiResponse
                .<PoliceCaseResponse>builder()
                .success(true)
                .message("Police case fetched successfully")
                .data(
                        policeCaseService.getPoliceCase(id)
                )
                .build();

    }

    @PutMapping("/{id}/status")
    public ApiResponse<PoliceCaseResponse>
    updateStatus(

            @PathVariable Long id,

            @Valid
            @RequestBody
            UpdatePoliceCaseStatusRequest request

    ) {

        return ApiResponse
                .<PoliceCaseResponse>builder()
                .success(true)
                .message("Police case updated successfully")
                .data(
                        policeCaseService.updateStatus(
                                id,
                                request
                        )
                )
                .build();

    }

    @GetMapping("/history")
public ApiResponse<List<PoliceCaseResponse>>
getHistory() {

    return ApiResponse
            .<List<PoliceCaseResponse>>builder()
            .success(true)
            .message(
                    "Police history fetched successfully"
            )
            .data(
                    policeCaseService.getHistory()
            )
            .build();

}

}
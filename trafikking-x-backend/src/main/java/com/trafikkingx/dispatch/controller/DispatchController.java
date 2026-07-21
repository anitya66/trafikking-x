package com.trafikkingx.dispatch.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.dispatch.dto.request.AssignResourcesRequest;
import com.trafikkingx.dispatch.dto.request.CompleteDispatchRequest;
import com.trafikkingx.dispatch.dto.request.CreateDispatchRequest;
import com.trafikkingx.dispatch.dto.request.UpdateDispatchStatusRequest;
import com.trafikkingx.dispatch.dto.response.DispatchResponse;
import com.trafikkingx.dispatch.service.DispatchService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/dispatches")
@RequiredArgsConstructor
public class DispatchController {

    private final DispatchService dispatchService;

    @Operation(summary = "Create Dispatch")
    @PostMapping
    public ApiResponse<DispatchResponse> createDispatch(
            @Valid @RequestBody CreateDispatchRequest request) {

        DispatchResponse response =
                dispatchService.createDispatch(request);

        return ApiResponse.<DispatchResponse>builder()
                .success(true)
                .message("Dispatch created successfully")
                .data(response)
                .build();
    }

    @Operation(summary = "Get All Dispatches")
    @GetMapping
    public ApiResponse<List<DispatchResponse>> getAllDispatches() {

        List<DispatchResponse> response =
                dispatchService.getAllDispatches();

        return ApiResponse.<List<DispatchResponse>>builder()
                .success(true)
                .message("Dispatches fetched successfully")
                .data(response)
                .build();
    }

    @Operation(summary = "Get Dispatch By Id")
    @GetMapping("/{id}")
    public ApiResponse<DispatchResponse> getDispatch(
            @PathVariable Long id) {

        DispatchResponse response =
                dispatchService.getDispatch(id);

        return ApiResponse.<DispatchResponse>builder()
                .success(true)
                .message("Dispatch fetched successfully")
                .data(response)
                .build();
    }

    @Operation(summary = "Get Dispatch By Incident")
    @GetMapping("/incident/{incidentId}")
    public ApiResponse<DispatchResponse> getDispatchByIncident(
            @PathVariable Long incidentId) {

        DispatchResponse response =
                dispatchService.getDispatchByIncident(incidentId);

        return ApiResponse.<DispatchResponse>builder()
                .success(true)
                .message("Dispatch fetched successfully")
                .data(response)
                .build();
    }

    @Operation(summary = "Assign Resources")
    @PostMapping("/{dispatchId}/assign-resources")
    public ApiResponse<DispatchResponse> assignResources(

            @PathVariable Long dispatchId,

            @RequestBody AssignResourcesRequest request) {

        DispatchResponse response =
                dispatchService.assignResources(
                        dispatchId,
                        request
                );

        return ApiResponse.<DispatchResponse>builder()
                .success(true)
                .message("Resources assigned successfully")
                .data(response)
                .build();
    }

    @Operation(summary = "Update Dispatch Status")
    @PatchMapping("/{dispatchId}/status")
    public ApiResponse<DispatchResponse> updateStatus(

            @PathVariable Long dispatchId,

            @RequestBody
            UpdateDispatchStatusRequest request) {

        DispatchResponse response =
                dispatchService.updateDispatchStatus(
                        dispatchId,
                        request
                );

        return ApiResponse.<DispatchResponse>builder()
                .success(true)
                .message("Dispatch status updated successfully")
                .data(response)
                .build();
    }

    @Operation(summary = "Complete Dispatch")
    @PostMapping("/{dispatchId}/complete")
    public ApiResponse<DispatchResponse> completeDispatch(

            @PathVariable Long dispatchId,

            @RequestBody
            CompleteDispatchRequest request) {

        DispatchResponse response =
                dispatchService.completeDispatch(
                        dispatchId,
                        request
                );

        return ApiResponse.<DispatchResponse>builder()
                .success(true)
                .message("Dispatch completed successfully")
                .data(response)
                .build();
    }
}
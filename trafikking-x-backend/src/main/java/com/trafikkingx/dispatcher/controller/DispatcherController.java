package com.trafikkingx.dispatcher.controller;

import com.trafikkingx.common.pagination.PageResponse;
import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.dispatcher.dto.request.CreateDispatcherRequest;
import com.trafikkingx.dispatcher.dto.request.UpdateDispatcherRequest;
import com.trafikkingx.dispatcher.dto.response.DispatcherResponse;
import com.trafikkingx.dispatcher.enums.DispatcherStatus;
import com.trafikkingx.dispatcher.service.DispatcherService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/dispatchers")
public class DispatcherController {

    private final DispatcherService dispatcherService;

    @PostMapping
    public ApiResponse<DispatcherResponse> createDispatcher(
            @Valid @RequestBody CreateDispatcherRequest request) {

        return ApiResponse.<DispatcherResponse>builder()
                .success(true)
                .message("Dispatcher created successfully.")
                .data(dispatcherService.createDispatcher(request))
                .build();
    }

    @GetMapping
    public ApiResponse<PageResponse<DispatcherResponse>> getAllDispatchers(

            @RequestParam(defaultValue = "0") int page,

            @RequestParam(defaultValue = "10") int size,

            @RequestParam(required = false) String zone,

            @RequestParam(required = false) DispatcherStatus status) {

        return ApiResponse.<PageResponse<DispatcherResponse>>builder()
                .success(true)
                .message("Dispatchers fetched successfully.")
                .data(dispatcherService.getAllDispatchers(
                        page,
                        size,
                        zone,
                        status
                ))
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse<DispatcherResponse> getDispatcherById(
            @PathVariable Long id) {

        return ApiResponse.<DispatcherResponse>builder()
                .success(true)
                .message("Dispatcher fetched successfully.")
                .data(dispatcherService.getDispatcherById(id))
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<DispatcherResponse> updateDispatcher(

            @PathVariable Long id,

            @Valid @RequestBody UpdateDispatcherRequest request) {

        return ApiResponse.<DispatcherResponse>builder()
                .success(true)
                .message("Dispatcher updated successfully.")
                .data(dispatcherService.updateDispatcher(id, request))
                .build();
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteDispatcher(
            @PathVariable Long id) {

        dispatcherService.deleteDispatcher(id);

        return ApiResponse.<String>builder()
                .success(true)
                .message("Dispatcher deleted successfully.")
                .build();
    }
}
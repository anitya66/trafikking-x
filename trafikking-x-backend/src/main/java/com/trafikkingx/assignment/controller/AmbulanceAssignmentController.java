package com.trafikkingx.assignment.controller;

import com.trafikkingx.assignment.dto.request.AssignmentActionRequest;
import com.trafikkingx.assignment.dto.response.AssignmentDetailsResponse;
import com.trafikkingx.assignment.service.AmbulanceAssignmentService;
import com.trafikkingx.common.response.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/ambulance/assignments")
public class AmbulanceAssignmentController {

    private final AmbulanceAssignmentService
            ambulanceAssignmentService;

    @GetMapping
    public ApiResponse<List<AssignmentDetailsResponse>>
    getMyAssignments() {

        return ApiResponse
                .<List<AssignmentDetailsResponse>>builder()
                .success(true)
                .message("Assignments fetched successfully.")
                .data(
                        ambulanceAssignmentService
                                .getMyAssignments()
                )
                .build();
    }

    @GetMapping("/current")
    public ApiResponse<AssignmentDetailsResponse>
    getCurrentAssignment() {

        return ApiResponse
                .<AssignmentDetailsResponse>builder()
                .success(true)
                .message("Current assignment fetched successfully.")
                .data(
                        ambulanceAssignmentService
                                .getCurrentAssignment()
                )
                .build();
    }

    @PostMapping("/{assignmentId}/accept")
    public ApiResponse<AssignmentDetailsResponse>
    acceptAssignment(

            @PathVariable Long assignmentId,

            @Valid
            @RequestBody
            AssignmentActionRequest request
    ) {

        return ApiResponse
                .<AssignmentDetailsResponse>builder()
                .success(true)
                .message("Assignment accepted successfully.")
                .data(
                        ambulanceAssignmentService
                                .acceptAssignment(
                                        assignmentId,
                                        request
                                )
                )
                .build();
    }

    @PostMapping("/{assignmentId}/reject")
    public ApiResponse<AssignmentDetailsResponse>
    rejectAssignment(

            @PathVariable Long assignmentId,

            @Valid
            @RequestBody
            AssignmentActionRequest request
    ) {

        return ApiResponse
                .<AssignmentDetailsResponse>builder()
                .success(true)
                .message("Assignment rejected successfully.")
                .data(
                        ambulanceAssignmentService
                                .rejectAssignment(
                                        assignmentId,
                                        request
                                )
                )
                .build();
    }

    @PostMapping("/{assignmentId}/complete")
    public ApiResponse<AssignmentDetailsResponse>
    completeAssignment(

            @PathVariable Long assignmentId,

            @Valid
            @RequestBody
            AssignmentActionRequest request
    ) {

        return ApiResponse
                .<AssignmentDetailsResponse>builder()
                .success(true)
                .message("Assignment completed successfully.")
                .data(
                        ambulanceAssignmentService
                                .completeAssignment(
                                        assignmentId,
                                        request
                                )
                )
                .build();
    }

    @PostMapping("/{assignmentId}/start")
public ApiResponse<AssignmentDetailsResponse> startJourney(

        @PathVariable Long assignmentId,

        @RequestBody
        AssignmentActionRequest request

) {

    return ApiResponse
            .<AssignmentDetailsResponse>builder()
            .success(true)
            .message("Journey started successfully.")
            .data(
                    ambulanceAssignmentService.startJourney(
                            assignmentId,
                            request
                    )
            )
            .build();

}

@PostMapping("/{assignmentId}/arrive")
public ApiResponse<AssignmentDetailsResponse> markArrived(

        @PathVariable Long assignmentId,

        @RequestBody
        AssignmentActionRequest request

) {

    return ApiResponse
            .<AssignmentDetailsResponse>builder()
            .success(true)
            .message("Ambulance arrived successfully.")
            .data(
                    ambulanceAssignmentService.markArrived(
                            assignmentId,
                            request
                    )
            )
            .build();

}

}
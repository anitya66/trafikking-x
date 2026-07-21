package com.trafikkingx.emergency.controller;

import com.trafikkingx.common.response.ApiResponse;
import com.trafikkingx.emergency.dto.request.CreateEmergencyContactRequest;
import com.trafikkingx.emergency.dto.request.UpdateEmergencyContactRequest;
import com.trafikkingx.emergency.dto.response.EmergencyContactResponse;
import com.trafikkingx.emergency.service.EmergencyContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/emergency-contacts")
@RequiredArgsConstructor
public class EmergencyContactController {

    private final EmergencyContactService emergencyContactService;

    @PostMapping
    public ApiResponse<EmergencyContactResponse> createContact(
            @Valid @RequestBody CreateEmergencyContactRequest request) {

        EmergencyContactResponse response =
                emergencyContactService.createContact(request);

        return ApiResponse.<EmergencyContactResponse>builder()
                .success(true)
                .message("Emergency contact created successfully")
                .data(response)
                .build();
    }

    @GetMapping
    public ApiResponse<List<EmergencyContactResponse>> getMyContacts() {

        List<EmergencyContactResponse> response =
                emergencyContactService.getMyContacts();

        return ApiResponse.<List<EmergencyContactResponse>>builder()
                .success(true)
                .message("Emergency contacts fetched successfully")
                .data(response)
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse<EmergencyContactResponse> getContactById(
            @PathVariable Long id) {

        EmergencyContactResponse response =
                emergencyContactService.getContactById(id);

        return ApiResponse.<EmergencyContactResponse>builder()
                .success(true)
                .message("Emergency contact fetched successfully")
                .data(response)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<EmergencyContactResponse> updateContact(
            @PathVariable Long id,
            @Valid @RequestBody UpdateEmergencyContactRequest request) {

        EmergencyContactResponse response =
                emergencyContactService.updateContact(id, request);

        return ApiResponse.<EmergencyContactResponse>builder()
                .success(true)
                .message("Emergency contact updated successfully")
                .data(response)
                .build();
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> deleteContact(
            @PathVariable Long id) {

        emergencyContactService.deleteContact(id);

        return ApiResponse.<Void>builder()
                .success(true)
                .message("Emergency contact deleted successfully")
                .build();
    }
}
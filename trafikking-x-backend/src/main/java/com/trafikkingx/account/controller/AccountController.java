package com.trafikkingx.account.controller;

import com.trafikkingx.account.dto.request.ChangePasswordRequest;
import com.trafikkingx.account.dto.request.UpdateProfileRequest;
import com.trafikkingx.account.dto.response.ProfileResponse;
import com.trafikkingx.account.service.AccountService;
import com.trafikkingx.common.response.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/account")
@RequiredArgsConstructor
@Tag(name = "Account", description = "Account Management APIs")
public class AccountController {

    private final AccountService accountService;

    @GetMapping("/me")
    @Operation(summary = "Get Current User Profile")
    public ApiResponse<ProfileResponse> getMyProfile() {

        return ApiResponse.success(
                "Profile fetched successfully.",
                accountService.getMyProfile()
        );
    }

    @PostMapping(
            value = "/avatar",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    @Operation(summary = "Upload Profile Avatar")
    public ApiResponse<ProfileResponse> uploadAvatar(
            @RequestParam("file") MultipartFile file
    ) {

        return ApiResponse.success(
                "Avatar uploaded successfully.",
                accountService.uploadAvatar(file)
        );
    }

    @DeleteMapping("/avatar")
    @Operation(summary = "Delete Profile Avatar")
    public ApiResponse<ProfileResponse> deleteAvatar() {

        return ApiResponse.success(
                "Avatar deleted successfully.",
                accountService.deleteAvatar()
        );
    }

    @PutMapping("/password")
    @Operation(summary = "Change Password")
    public ApiResponse<Void> changePassword(
            @Valid @RequestBody ChangePasswordRequest request
    ) {

        accountService.changePassword(request);

        return ApiResponse.success(
                "Password changed successfully.",
                null
        );
    }

    @PutMapping
@Operation(summary = "Update Profile")
public ApiResponse<ProfileResponse> updateProfile(
        @Valid @RequestBody UpdateProfileRequest request
) {

    return ApiResponse.success(
            "Profile updated successfully.",
            accountService.updateProfile(request)
    );

}

}
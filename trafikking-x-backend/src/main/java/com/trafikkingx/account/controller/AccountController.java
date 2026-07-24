package com.trafikkingx.account.controller;

import com.trafikkingx.account.dto.response.ProfileResponse;
import com.trafikkingx.account.service.AccountService;
import com.trafikkingx.common.response.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
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

}
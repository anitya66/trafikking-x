package com.trafikkingx.account.controller;

import com.trafikkingx.account.dto.response.ProfileResponse;
import com.trafikkingx.account.service.AccountService;
import com.trafikkingx.common.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/account")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @GetMapping("/me")
    public ApiResponse<ProfileResponse> getMyProfile() {

        return ApiResponse.success(
                "Profile fetched successfully.",
                accountService.getMyProfile()
        );

    }

}
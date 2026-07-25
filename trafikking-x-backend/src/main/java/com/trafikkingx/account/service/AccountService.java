package com.trafikkingx.account.service;

import com.trafikkingx.account.dto.request.ChangePasswordRequest;
import com.trafikkingx.account.dto.response.ProfileResponse;
import org.springframework.web.multipart.MultipartFile;
import com.trafikkingx.account.dto.request.UpdateProfileRequest;

public interface AccountService {

    ProfileResponse getMyProfile();

    ProfileResponse uploadAvatar(MultipartFile file);

    ProfileResponse deleteAvatar();

    void changePassword(ChangePasswordRequest request);

    ProfileResponse updateProfile(
        UpdateProfileRequest request);

}
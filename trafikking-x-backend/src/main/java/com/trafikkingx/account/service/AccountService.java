package com.trafikkingx.account.service;

import com.trafikkingx.account.dto.response.ProfileResponse;
import org.springframework.web.multipart.MultipartFile;

public interface AccountService {

    ProfileResponse getMyProfile();

    ProfileResponse uploadAvatar(MultipartFile file);

    ProfileResponse deleteAvatar();

}
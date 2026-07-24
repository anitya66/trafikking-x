package com.trafikkingx.account.service.impl;

import com.trafikkingx.account.dto.response.ProfileResponse;
import com.trafikkingx.account.mapper.AccountMapper;
import com.trafikkingx.account.service.AccountService;
import com.trafikkingx.auth.entity.User;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.security.currentuser.CurrentUserService;
import com.trafikkingx.storage.dto.UploadResponse;
import com.trafikkingx.storage.service.StorageService;
import com.trafikkingx.storage.validator.FileValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.trafikkingx.account.dto.request.ChangePasswordRequest;
import com.trafikkingx.account.exception.InvalidPasswordException;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final CurrentUserService currentUserService;

    private final AccountMapper accountMapper;

    private final StorageService storageService;

    private final FileValidator fileValidator;

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public ProfileResponse getMyProfile() {

        return accountMapper.toProfileResponse(
                currentUserService.getCurrentUser()
        );

    }

    @Override
    public ProfileResponse uploadAvatar(MultipartFile file) {

        User currentUser = currentUserService.getCurrentUser();

        fileValidator.validateProfileImage(file);

        if (currentUser.getProfileImage() != null
                && !currentUser.getProfileImage().isBlank()) {

            storageService.delete(currentUser.getProfileImage());

        }

        UploadResponse uploadResponse =
                storageService.upload(file, "profiles");

        currentUser.setProfileImage(
                uploadResponse.getImageUrl()
        );

        userRepository.save(currentUser);

        return accountMapper.toProfileResponse(currentUser);

    }

    @Override
    public ProfileResponse deleteAvatar() {

        User currentUser = currentUserService.getCurrentUser();

        if (currentUser.getProfileImage() != null
                && !currentUser.getProfileImage().isBlank()) {

            storageService.delete(currentUser.getProfileImage());

            currentUser.setProfileImage(null);

            userRepository.save(currentUser);
        }

        return accountMapper.toProfileResponse(currentUser);

    }

    @Override
public void changePassword(ChangePasswordRequest request) {

    User currentUser = currentUserService.getCurrentUser();

    if (!passwordEncoder.matches(
            request.getCurrentPassword(),
            currentUser.getPassword()
    )) {

        throw new InvalidPasswordException(
                "Current password is incorrect."
        );
    }

    if (!request.getNewPassword().equals(
            request.getConfirmPassword()
    )) {

        throw new InvalidPasswordException(
                "New password and confirm password do not match."
        );
    }

    currentUser.setPassword(
            passwordEncoder.encode(
                    request.getNewPassword()
            )
    );

    userRepository.save(currentUser);

}

}
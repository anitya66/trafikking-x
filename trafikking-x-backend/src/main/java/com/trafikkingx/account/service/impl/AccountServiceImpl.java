package com.trafikkingx.account.service.impl;

import com.trafikkingx.account.dto.response.ProfileResponse;
import com.trafikkingx.account.mapper.AccountMapper;
import com.trafikkingx.account.service.AccountService;
import com.trafikkingx.security.currentuser.CurrentUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final CurrentUserService currentUserService;

    private final AccountMapper accountMapper;

    @Override
    public ProfileResponse getMyProfile() {

        return accountMapper.toProfileResponse(
                currentUserService.getCurrentUser()
        );

    }

}
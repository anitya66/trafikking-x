package com.trafikkingx.citizen.service;

import com.trafikkingx.citizen.dto.request.CreateCitizenProfileRequest;
import com.trafikkingx.citizen.dto.request.UpdateCitizenProfileRequest;
import com.trafikkingx.citizen.dto.response.CitizenProfileResponse;

public interface CitizenProfileService {

    CitizenProfileResponse createProfile(CreateCitizenProfileRequest request);

    CitizenProfileResponse getMyProfile();

    CitizenProfileResponse updateProfile(UpdateCitizenProfileRequest request);

}
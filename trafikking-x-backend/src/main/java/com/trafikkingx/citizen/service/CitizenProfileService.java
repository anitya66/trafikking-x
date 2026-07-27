package com.trafikkingx.citizen.service;

import com.trafikkingx.citizen.dto.request.CreateCitizenProfileRequest;
import com.trafikkingx.citizen.dto.request.UpdateCitizenProfileRequest;
import com.trafikkingx.citizen.dto.response.CitizenProfileResponse;
import java.util.List;

public interface CitizenProfileService {

    CitizenProfileResponse createProfile(CreateCitizenProfileRequest request);

    CitizenProfileResponse getMyProfile();

    CitizenProfileResponse updateProfile(UpdateCitizenProfileRequest request);

    List<CitizenProfileResponse> getAllCitizens();

CitizenProfileResponse getCitizenById(Long id);

}
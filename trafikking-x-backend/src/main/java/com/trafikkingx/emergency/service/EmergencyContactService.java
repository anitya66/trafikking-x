package com.trafikkingx.emergency.service;

import com.trafikkingx.emergency.dto.request.CreateEmergencyContactRequest;
import com.trafikkingx.emergency.dto.request.UpdateEmergencyContactRequest;
import com.trafikkingx.emergency.dto.response.EmergencyContactResponse;

import java.util.List;

public interface EmergencyContactService {

    EmergencyContactResponse createContact(
            CreateEmergencyContactRequest request
    );

    List<EmergencyContactResponse> getMyContacts();

    EmergencyContactResponse getContactById(Long id);

    EmergencyContactResponse updateContact(
            Long id,
            UpdateEmergencyContactRequest request
    );

    void deleteContact(Long id);
}
package com.trafikkingx.ambulance.validation;

import com.trafikkingx.ambulance.dto.request.CreateAmbulanceRequest;
import com.trafikkingx.common.exception.custom.InvalidAmbulanceException;
import org.springframework.stereotype.Component;

@Component
public class AmbulanceValidator {

    public void validate(CreateAmbulanceRequest request) {

        if (request.getCurrentLatitude() < -90 ||
                request.getCurrentLatitude() > 90) {

            throw new InvalidAmbulanceException(
                    "Latitude must be between -90 and 90."
            );
        }

        if (request.getCurrentLongitude() < -180 ||
                request.getCurrentLongitude() > 180) {

            throw new InvalidAmbulanceException(
                    "Longitude must be between -180 and 180."
            );
        }
    }
}
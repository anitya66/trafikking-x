package com.trafikkingx.police.validation;

import com.trafikkingx.common.exception.custom.InvalidPoliceStationException;
import com.trafikkingx.police.dto.request.CreatePoliceStationRequest;
import org.springframework.stereotype.Component;

@Component
public class PoliceStationValidator {

    public void validate(
            CreatePoliceStationRequest request) {

        if (request.getLatitude() < -90 ||
                request.getLatitude() > 90) {

            throw new InvalidPoliceStationException(
                    "Latitude must be between -90 and 90."
            );
        }

        if (request.getLongitude() < -180 ||
                request.getLongitude() > 180) {

            throw new InvalidPoliceStationException(
                    "Longitude must be between -180 and 180."
            );
        }
    }
}
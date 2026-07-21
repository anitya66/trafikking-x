package com.trafikkingx.dispatch.validation;

import com.trafikkingx.common.exception.custom.InvalidDispatchException;
import com.trafikkingx.dispatch.dto.request.CreateDispatchRequest;
import org.springframework.stereotype.Component;

@Component
public class DispatchValidator {

    public void validate(CreateDispatchRequest request) {

        if (request.getPriority() == null) {

            throw new InvalidDispatchException(
                    "Emergency priority is required."
            );
        }
    }
}
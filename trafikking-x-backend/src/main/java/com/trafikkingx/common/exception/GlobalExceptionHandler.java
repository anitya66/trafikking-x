package com.trafikkingx.common.exception;

import com.trafikkingx.common.exception.custom.EmailAlreadyExistsException;
import com.trafikkingx.common.exception.custom.InvalidCredentialsException;
import com.trafikkingx.common.exception.custom.PhoneAlreadyExistsException;
import com.trafikkingx.common.response.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Object>> handleException(Exception ex) {

        ApiResponse<Object> response = ApiResponse.builder()
                .success(false)
                .message(ex.getMessage())
                .data(null)
                .build();

        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @ExceptionHandler(EmailAlreadyExistsException.class)
public ResponseEntity<ApiResponse<Object>> handleEmailAlreadyExists(
        EmailAlreadyExistsException ex) {

    ApiResponse<Object> response = ApiResponse.builder()
            .success(false)
            .message(ex.getMessage())
            .data(null)
            .build();

    return ResponseEntity.badRequest().body(response);
}
@ExceptionHandler(PhoneAlreadyExistsException.class)
public ResponseEntity<ApiResponse<Object>> handlePhoneAlreadyExists(
        PhoneAlreadyExistsException ex) {

    ApiResponse<Object> response = ApiResponse.builder()
            .success(false)
            .message(ex.getMessage())
            .data(null)
            .build();

    return ResponseEntity.badRequest().body(response);
}
@ExceptionHandler(InvalidCredentialsException.class)
public ResponseEntity<ApiResponse<Object>> handleInvalidCredentials(
        InvalidCredentialsException ex) {

    ApiResponse<Object> response = ApiResponse.builder()
            .success(false)
            .message(ex.getMessage())
            .data(null)
            .build();

    return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(response);
}

}
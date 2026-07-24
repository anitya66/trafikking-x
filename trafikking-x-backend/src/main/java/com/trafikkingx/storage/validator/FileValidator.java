package com.trafikkingx.storage.validator;

import com.trafikkingx.storage.exception.FileTooLargeException;
import com.trafikkingx.storage.exception.InvalidFileException;
import com.trafikkingx.storage.exception.UnsupportedFileTypeException;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Component
public class FileValidator {

    private static final long MAX_SIZE = 5 * 1024 * 1024;

    private static final List<String> ALLOWED_TYPES = List.of(
            "image/jpeg",
            "image/png",
            "image/webp"
    );

    public void validateProfileImage(MultipartFile file) {

        if (file == null || file.isEmpty()) {
            throw new InvalidFileException(
                    "Profile image is required."
            );
        }

        if (file.getSize() > MAX_SIZE) {
            throw new FileTooLargeException(
                    "Maximum file size is 5 MB."
            );
        }

        if (!ALLOWED_TYPES.contains(file.getContentType())) {
            throw new UnsupportedFileTypeException(
                    "Only JPG, PNG and WEBP images are allowed."
            );
        }

    }

}
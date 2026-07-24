package com.trafikkingx.storage.service.impl;

import com.trafikkingx.storage.config.StorageProperties;
import com.trafikkingx.storage.dto.UploadResponse;
import com.trafikkingx.storage.exception.StorageException;
import com.trafikkingx.storage.service.StorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class LocalStorageService implements StorageService {

    private final StorageProperties storageProperties;

    @Override
    public UploadResponse upload(
            MultipartFile file,
            String folder
    ) {

        try {

            Path uploadPath = Paths.get(
                    storageProperties.getUploadDir(),
                    folder
            );

            Files.createDirectories(uploadPath);

            String extension = StringUtils.getFilenameExtension(
                    file.getOriginalFilename()
            );

            String fileName = UUID.randomUUID() + "." + extension;

            Path target = uploadPath.resolve(fileName);

            Files.copy(
                    file.getInputStream(),
                    target,
                    StandardCopyOption.REPLACE_EXISTING
            );

            return new UploadResponse(
                    "/uploads/" + folder + "/" + fileName
            );

        } catch (IOException e) {

            throw new StorageException(
                    "Failed to upload file.",
                    e
            );

        }

    }

    @Override
    public void delete(String filePath) {

        if (filePath == null || filePath.isBlank()) {
            return;
        }

        try {

            String relativePath =
                    filePath.replace("/uploads/", "");

            Path file = Paths.get(
                    storageProperties.getUploadDir(),
                    relativePath
            );

            Files.deleteIfExists(file);

        } catch (IOException ignored) {
        }

    }

}
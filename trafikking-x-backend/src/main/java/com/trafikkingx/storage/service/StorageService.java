package com.trafikkingx.storage.service;

import com.trafikkingx.storage.dto.UploadResponse;
import org.springframework.web.multipart.MultipartFile;

public interface StorageService {

    UploadResponse upload(
            MultipartFile file,
            String folder
    );

    void delete(String filePath);

}
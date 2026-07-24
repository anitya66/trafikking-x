package com.trafikkingx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import com.trafikkingx.storage.config.StorageProperties;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class TrafikkingXBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrafikkingXBackendApplication.class, args);
	}

}

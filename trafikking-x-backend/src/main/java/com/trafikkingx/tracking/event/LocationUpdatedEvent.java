package com.trafikkingx.tracking.event;

import lombok.Getter;

import java.time.LocalDateTime;

/**
 * Published whenever an ambulance updates
 * its live GPS location.
 *
 * This event is intentionally lightweight so it
 * can later be published to Kafka/RabbitMQ
 * without carrying JPA entities.
 */
@Getter
public class LocationUpdatedEvent {

    private final Long ambulanceId;

    private final Long userId;

    private final Double latitude;

    private final Double longitude;

    private final LocalDateTime updatedAt;

    public LocationUpdatedEvent(
            Long ambulanceId,
            Long userId,
            Double latitude,
            Double longitude
    ) {

        this.ambulanceId = ambulanceId;
        this.userId = userId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.updatedAt = LocalDateTime.now();

    }

}
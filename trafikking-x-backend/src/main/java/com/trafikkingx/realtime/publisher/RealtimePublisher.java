package com.trafikkingx.realtime.publisher;

public interface RealtimePublisher {

    /**
     * Publish a message to a WebSocket topic.
     *
     * @param destination STOMP destination
     * @param payload      message payload
     */
    void publish(
            String destination,
            Object payload
    );
}
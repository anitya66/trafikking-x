package com.trafikkingx.realtime.publisher.impl;

import com.trafikkingx.realtime.publisher.RealtimePublisher;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class RealtimePublisherImpl
        implements RealtimePublisher {

    private final SimpMessagingTemplate messagingTemplate;

    @Override
    public void publish(
            String destination,
            Object payload) {

        log.info(
                "Publishing realtime message to {}",
                destination
        );

        messagingTemplate.convertAndSend(
                destination,
                payload
        );
    }
}
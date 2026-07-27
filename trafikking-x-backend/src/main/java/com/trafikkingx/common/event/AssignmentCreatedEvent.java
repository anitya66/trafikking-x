package com.trafikkingx.common.event;

import lombok.Getter;

import java.time.LocalDateTime;

/**
 * Published after a dispatcher successfully
 * approves an emergency dispatch and an
 * Assignment has been created.
 *
 * This event is consumed by:
 *
 * - Notification Module
 * - Tracking Module
 * - WebSocket Module
 * - Analytics Module
 * - Audit Module
 */
@Getter
public class AssignmentCreatedEvent {

    private final Long assignmentId;

    private final Long incidentId;

    private final Long ambulanceId;

    private final Long dispatcherId;

    private final LocalDateTime createdAt;

    private final Long recipientUserId;

    public AssignmentCreatedEvent(
        Long assignmentId,
        Long incidentId,
        Long ambulanceId,
        Long dispatcherId,
        Long recipientUserId
) {

    this.assignmentId = assignmentId;
    this.incidentId = incidentId;
    this.ambulanceId = ambulanceId;
    this.dispatcherId = dispatcherId;
    this.recipientUserId = recipientUserId;
    this.createdAt = LocalDateTime.now();

}

}
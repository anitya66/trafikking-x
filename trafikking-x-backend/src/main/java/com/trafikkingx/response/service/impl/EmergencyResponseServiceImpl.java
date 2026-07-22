package com.trafikkingx.response.service.impl;

import com.trafikkingx.assignment.service.AssignmentEngineService;
import com.trafikkingx.dispatch.service.DispatchService;
import com.trafikkingx.notification.service.NotificationService;
import com.trafikkingx.response.dto.response.EmergencyResponseResponse;
import com.trafikkingx.response.service.EmergencyResponseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmergencyResponseServiceImpl
        implements EmergencyResponseService {

    private final DispatchService dispatchService;

    private final AssignmentEngineService assignmentEngineService;

    private final NotificationService notificationService;

    @Override
    public EmergencyResponseResponse processEmergency(
            Long incidentId) {

        log.info(
                "Starting emergency response workflow for incident {}",
                incidentId
        );

        /*
         * Step 1
         * Create / Fetch Dispatch
         */

        /*
         * Step 2
         * Auto Assign Resources
         */

        /*
         * Step 3
         * Send Notifications
         */

        /*
         * Step 4
         * Return Workflow Response
         */

        return EmergencyResponseResponse.builder()

                .incidentId(incidentId)

                .assignmentCompleted(false)

                .notificationSent(false)

                .build();
    }
}
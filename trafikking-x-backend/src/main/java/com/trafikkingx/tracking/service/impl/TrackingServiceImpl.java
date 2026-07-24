package com.trafikkingx.tracking.service.impl;

import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.common.exception.custom.DispatchNotFoundException;
import com.trafikkingx.dispatch.entity.Dispatch;
import com.trafikkingx.incident.entity.Incident;
import com.trafikkingx.tracking.calculator.TrackingCalculator;
import com.trafikkingx.tracking.dto.response.TimelineEventResponse;
import com.trafikkingx.tracking.dto.response.TrackingResponse;
import com.trafikkingx.tracking.service.TrackingService;
import com.trafikkingx.dispatch.repository.DispatchRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class TrackingServiceImpl
        implements TrackingService {

    private final DispatchRepository dispatchRepository;

    private final TrackingCalculator trackingCalculator;

    private Dispatch getDispatch(Long dispatchId) {

        return dispatchRepository.findById(dispatchId)
                .orElseThrow(
                        DispatchNotFoundException::new
                );

    }

    @Override
    public TrackingResponse getTracking(
            Long dispatchId) {

        log.info(
                "Fetching tracking for dispatch {}",
                dispatchId
        );

        Dispatch dispatch =
                getDispatch(dispatchId);

        Incident incident =
                dispatch.getIncident();

        Ambulance ambulance =
                dispatch.getAmbulance();

        Double remainingDistance = null;

        Integer eta = null;

        if (ambulance != null) {

            remainingDistance =
                    trackingCalculator
                            .calculateRemainingDistance(
                                    ambulance,
                                    incident
                            );

            eta =
                    trackingCalculator
                            .calculateEtaMinutes(
                                    ambulance,
                                    incident
                            );

        }

        List<TimelineEventResponse> timeline =
                buildTimeline(dispatch);

        return TrackingResponse.builder()
                .dispatchId(dispatch.getId())
                .currentStatus(dispatch.getStatus())
                .remainingDistanceKm(
                        remainingDistance
                )
                .etaMinutes(eta)
                .timeline(timeline)
                .build();

    }

    private List<TimelineEventResponse> buildTimeline(
            Dispatch dispatch) {

        List<TimelineEventResponse> timeline =
                new ArrayList<>();

        if (dispatch.getCreatedAt() != null) {

            timeline.add(

                    TimelineEventResponse.builder()

                            .title("Incident Reported")

                            .description(
                                    "Emergency incident created."
                            )

                            .timestamp(
                                    dispatch.getCreatedAt()
                            )

                            .build()

            );

        }

        if (dispatch.getDispatchedAt() != null) {

            timeline.add(

                    TimelineEventResponse.builder()

                            .title("Resources Assigned")

                            .description(
                                    "Emergency resources assigned."
                            )

                            .timestamp(
                                    dispatch.getDispatchedAt()
                            )

                            .build()

            );

        }

        if (dispatch.getAcceptedAt() != null) {

            timeline.add(

                    TimelineEventResponse.builder()

                            .title("Responding")

                            .description(
                                    "Ambulance is responding."
                            )

                            .timestamp(
                                    dispatch.getAcceptedAt()
                            )

                            .build()

            );

        }

        if (dispatch.getCompletedAt() != null) {

            timeline.add(

                    TimelineEventResponse.builder()

                            .title("Completed")

                            .description(
                                    "Incident completed successfully."
                            )

                            .timestamp(
                                    dispatch.getCompletedAt()
                            )

                            .build()

            );

        }

        return timeline;

    }

}
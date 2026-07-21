package com.trafikkingx.dispatch.workflow;

import com.trafikkingx.common.exception.custom.InvalidDispatchException;
import com.trafikkingx.dispatch.enums.DispatchStatus;

import java.util.Map;
import java.util.Set;

public final class DispatchStateMachine {

    private DispatchStateMachine() {
    }

    private static final Map<DispatchStatus, Set<DispatchStatus>> ALLOWED_TRANSITIONS =
            Map.of(
                    DispatchStatus.PENDING,
                    Set.of(
                            DispatchStatus.RESOURCES_ASSIGNED,
                            DispatchStatus.CANCELLED
                    ),

                    DispatchStatus.RESOURCES_ASSIGNED,
                    Set.of(
                            DispatchStatus.DISPATCHED,
                            DispatchStatus.CANCELLED
                    ),

                    DispatchStatus.DISPATCHED,
                    Set.of(
                            DispatchStatus.RESPONDING
                    ),

                    DispatchStatus.RESPONDING,
                    Set.of(
                            DispatchStatus.ON_SCENE
                    ),

                    DispatchStatus.ON_SCENE,
                    Set.of(
                            DispatchStatus.COMPLETED
                    ),

                    DispatchStatus.COMPLETED,
                    Set.of(),

                    DispatchStatus.CANCELLED,
                    Set.of()
            );

    public static void validateTransition(
            DispatchStatus current,
            DispatchStatus next) {

        if (!ALLOWED_TRANSITIONS
                .getOrDefault(current, Set.of())
                .contains(next)) {

            throw new InvalidDispatchException(
                    String.format(
                            "Invalid transition: %s -> %s",
                            current,
                            next
                    )
            );
        }
    }
}
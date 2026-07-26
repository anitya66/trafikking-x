package com.trafikkingx.assignment.state;

import com.trafikkingx.assignment.entity.Assignment;
import com.trafikkingx.assignment.enums.AssignmentStatus;
import com.trafikkingx.common.exception.custom.InvalidAssignmentStateException;
import org.springframework.stereotype.Component;

@Component
public class AssignmentStateMachine {

    public void transition(
            Assignment assignment,
            AssignmentStatus targetStatus
    ) {

        AssignmentStatus current =
                assignment.getStatus();

        if (!isValid(current, targetStatus)) {

            throw new InvalidAssignmentStateException(

                    "Cannot change assignment from "

                            + current +

                            " to "

                            + targetStatus

            );

        }

        assignment.setStatus(
                targetStatus
        );

    }

    private boolean isValid(

            AssignmentStatus current,

            AssignmentStatus target

    ) {

        return switch (current) {

            case PENDING ->

                    target == AssignmentStatus.ACCEPTED ||

                    target == AssignmentStatus.REJECTED;

            case ACCEPTED ->

                    target == AssignmentStatus.EN_ROUTE;

            case EN_ROUTE ->

                    target == AssignmentStatus.ARRIVED;

            case ARRIVED ->

                    target == AssignmentStatus.COMPLETED;

            default -> false;

        };

    }

}
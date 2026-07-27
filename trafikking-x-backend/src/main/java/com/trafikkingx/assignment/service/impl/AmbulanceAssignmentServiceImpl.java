package com.trafikkingx.assignment.service.impl;

import com.trafikkingx.assignment.dto.request.AssignmentActionRequest;
import com.trafikkingx.assignment.dto.response.AssignmentDetailsResponse;
import com.trafikkingx.assignment.entity.Assignment;
import com.trafikkingx.assignment.enums.AssignmentStatus;
import com.trafikkingx.assignment.mapper.AssignmentMapper;
import com.trafikkingx.assignment.repository.AssignmentRepository;
import com.trafikkingx.assignment.service.AmbulanceAssignmentService;
import com.trafikkingx.assignment.state.AssignmentStateMachine;

import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.ambulance.repository.AmbulanceRepository;
import com.trafikkingx.auth.entity.User;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.common.exception.custom.AmbulanceNotFoundException;
import com.trafikkingx.common.exception.custom.AssignmentNotFoundException;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AmbulanceAssignmentServiceImpl
        implements AmbulanceAssignmentService {

    private final AssignmentRepository assignmentRepository;

    private final AmbulanceRepository ambulanceRepository;

    private final AssignmentMapper assignmentMapper;

    private final UserRepository userRepository;

    private final AssignmentStateMachine assignmentStateMachine;

    private User getCurrentUser() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return userRepository
                .findByEmail(email)
                .orElseThrow(
                        () -> new UsernameNotFoundException(
                                "User not found"
                        )
                );
    }

    private Ambulance getCurrentAmbulance() {

        return ambulanceRepository
                .findByUser(getCurrentUser())
                .orElseThrow(
                        AmbulanceNotFoundException::new
                );
    }

    private Assignment getAssignment(
            Long assignmentId
    ) {

        return assignmentRepository
                .findById(assignmentId)
                .orElseThrow( AssignmentNotFoundException::new);
    }

@Override
public List<AssignmentDetailsResponse> getMyAssignments() {

    Ambulance ambulance =
            getCurrentAmbulance();

    return assignmentRepository
            .findByAmbulanceOrderByAssignedAtDesc(
                    ambulance
            )
            .stream()
            .map(
                    assignmentMapper::toResponse
            )
            .toList();

}

@Override
public AssignmentDetailsResponse getCurrentAssignment() {

    Ambulance ambulance =
            getCurrentAmbulance();

    return assignmentRepository
            .findFirstByAmbulanceAndStatusInOrderByAssignedAtDesc(
                    ambulance,
                    List.of(
                            AssignmentStatus.PENDING,
                            AssignmentStatus.ACCEPTED,
                            AssignmentStatus.EN_ROUTE,
                            AssignmentStatus.ARRIVED
                    )
            )
            .map(
                    assignmentMapper::toResponse
            )
            .orElse(null);

}

@Override
@Transactional
public AssignmentDetailsResponse acceptAssignment(
        Long assignmentId,
        AssignmentActionRequest request
) {

    Assignment assignment =
            getAssignment(assignmentId);

    assignmentStateMachine.transition(
        assignment,
        AssignmentStatus.ACCEPTED
);

    assignment.setAcceptedAt(
            LocalDateTime.now()
    );

    assignment.setRemarks(
            request.getRemarks()
    );

    Assignment saved =
            assignmentRepository.save(
                    assignment
            );

    log.info(
            "Assignment {} accepted.",
            assignmentId
    );

    return assignmentMapper.toResponse(
            saved
    );
}

@Override
@Transactional
public AssignmentDetailsResponse startJourney(
        Long assignmentId,
        AssignmentActionRequest request
) {

    Assignment assignment =
            getAssignment(assignmentId);

    assignmentStateMachine.transition(
        assignment,
        AssignmentStatus.EN_ROUTE
);

    assignment.setRemarks(
            request.getRemarks()
    );

    Assignment saved =
            assignmentRepository.save(
                    assignment
            );

    log.info(
            "Assignment {} is now EN_ROUTE.",
            assignmentId
    );

    return assignmentMapper.toResponse(
            saved
    );

}

@Override
@Transactional
public AssignmentDetailsResponse markArrived(
        Long assignmentId,
        AssignmentActionRequest request
) {

    Assignment assignment =
            getAssignment(assignmentId);

    assignmentStateMachine.transition(
        assignment,
        AssignmentStatus.ARRIVED
);

    assignment.setRemarks(
            request.getRemarks()
    );

    Assignment saved =
            assignmentRepository.save(
                    assignment
            );

    log.info(
            "Assignment {} marked ARRIVED.",
            assignmentId
    );

    return assignmentMapper.toResponse(
            saved
    );

}

@Override
@Transactional
public AssignmentDetailsResponse rejectAssignment(
        Long assignmentId,
        AssignmentActionRequest request
) {

    Assignment assignment =
            getAssignment(assignmentId);

    assignmentStateMachine.transition(
        assignment,
        AssignmentStatus.REJECTED
);

    assignment.setRemarks(
            request.getRemarks()
    );

    Assignment saved =
            assignmentRepository.save(
                    assignment
            );

    log.info(
            "Assignment {} rejected.",
            assignmentId
    );

    return assignmentMapper.toResponse(
            saved
    );
}

@Override
@Transactional
public AssignmentDetailsResponse completeAssignment(
        Long assignmentId,
        AssignmentActionRequest request
) {

    Assignment assignment =
            getAssignment(assignmentId);

    assignmentStateMachine.transition(
        assignment,
        AssignmentStatus.COMPLETED
);

    assignment.setCompletedAt(
            LocalDateTime.now()
    );

    assignment.setRemarks(
            request.getRemarks()
    );

    Assignment saved =
            assignmentRepository.save(
                    assignment
            );

    log.info(
            "Assignment {} completed.",
            assignmentId
    );

    return assignmentMapper.toResponse(
            saved
    );
}


}
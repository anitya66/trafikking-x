package com.trafikkingx.dispatcher.service.impl;

import com.trafikkingx.auth.entity.User;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.common.exception.custom.DispatcherAlreadyExistsException;
import com.trafikkingx.common.exception.custom.DispatcherNotFoundException;
import com.trafikkingx.common.exception.custom.DispatcherUserAlreadyAssignedException;
import com.trafikkingx.common.exception.custom.UserNotFoundException;
import com.trafikkingx.common.pagination.PageResponse;
import com.trafikkingx.dispatcher.dto.request.CreateDispatcherRequest;
import com.trafikkingx.dispatcher.dto.request.UpdateDispatcherRequest;
import com.trafikkingx.dispatcher.dto.response.DispatcherResponse;
import com.trafikkingx.dispatcher.entity.Dispatcher;
import com.trafikkingx.dispatcher.enums.DispatcherStatus;
import com.trafikkingx.dispatcher.mapper.DispatcherMapper;
import com.trafikkingx.dispatcher.repository.DispatcherRepository;
import com.trafikkingx.dispatcher.service.DispatcherService;
import com.trafikkingx.dispatcher.specification.DispatcherSpecification;
import lombok.RequiredArgsConstructor;
import com.trafikkingx.common.pagination.PaginationUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class DispatcherServiceImpl implements DispatcherService {

    private final DispatcherRepository dispatcherRepository;

    private final DispatcherMapper dispatcherMapper;

    private final UserRepository userRepository;


    private Dispatcher getDispatcher(Long id) {

    return dispatcherRepository.findById(id)
            .orElseThrow(
                    DispatcherNotFoundException::new
            );
}

@Override
@Transactional
public DispatcherResponse createDispatcher(
        CreateDispatcherRequest request) {

    log.info(
            "Creating dispatcher with employee ID: {}",
            request.getEmployeeId()
    );

    if (dispatcherRepository.existsByEmployeeId(
            request.getEmployeeId())) {

        throw new DispatcherAlreadyExistsException(
                request.getEmployeeId()
        );
    }

    if (dispatcherRepository.existsByUserId(
            request.getUserId())) {

        throw new DispatcherUserAlreadyAssignedException(
                request.getUserId()
        );
    }

    User user = userRepository.findById(
            request.getUserId()
    ).orElseThrow(UserNotFoundException::new);
    

    Dispatcher dispatcher =
            dispatcherMapper.toEntity(request);

    dispatcher.setUser(user);

    Dispatcher savedDispatcher =
            dispatcherRepository.save(dispatcher);

    log.info(
            "Dispatcher created successfully: {}",
            savedDispatcher.getEmployeeId()
    );

    return dispatcherMapper.toResponse(
            savedDispatcher
    );
}

@Override
public PageResponse<DispatcherResponse> getAllDispatchers(

        int page,

        int size,

        String zone,

        DispatcherStatus status
) {

    log.info(
            "Fetching dispatchers. page={}, size={}, zone={}, status={}",
            page,
            size,
            zone,
            status
    );

    Pageable pageable = PageRequest.of(
            page,
            size
    );

    Specification<Dispatcher> specification =
            Specification
                    .where(
                            DispatcherSpecification.isActive()
                    )
                    .and(
                            DispatcherSpecification.hasZone(zone)
                    )
                    .and(
                            DispatcherSpecification.hasStatus(status)
                    );

    Page<Dispatcher> dispatcherPage =
            dispatcherRepository.findAll(
                    specification,
                    pageable
            );

    Page<DispatcherResponse> response =
            dispatcherPage.map(
                    dispatcherMapper::toResponse
            );

    return PaginationUtils.toPageResponse(
            response
    );
}

@Override
public DispatcherResponse getDispatcherById(Long id) {

    log.info(
            "Fetching dispatcher with id: {}",
            id
    );

    Dispatcher dispatcher = getDispatcher(id);

    log.info(
            "Dispatcher fetched successfully: {}",
            dispatcher.getEmployeeId()
    );

    return dispatcherMapper.toResponse(dispatcher);
}

@Override
@Transactional
public DispatcherResponse updateDispatcher(
        Long id,
        UpdateDispatcherRequest request) {

    log.info(
            "Updating dispatcher with id: {}",
            id
    );

    Dispatcher dispatcher = getDispatcher(id);

    dispatcherMapper.updateEntity(
            request,
            dispatcher
    );

    Dispatcher updatedDispatcher =
            dispatcherRepository.save(dispatcher);

    log.info(
            "Dispatcher updated successfully: {}",
            updatedDispatcher.getEmployeeId()
    );

    return dispatcherMapper.toResponse(
            updatedDispatcher
    );
}

@Override
@Transactional
public void deleteDispatcher(Long id) {

    log.info(
            "Deleting dispatcher with id: {}",
            id
    );

    Dispatcher dispatcher = getDispatcher(id);

    dispatcherRepository.delete(dispatcher);

    log.info(
            "Dispatcher deleted successfully: {}",
            dispatcher.getEmployeeId()
    );
}

}
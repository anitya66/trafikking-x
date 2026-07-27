package com.trafikkingx.tracking.service.impl;

import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.ambulance.repository.AmbulanceRepository;
import com.trafikkingx.auth.entity.User;
import com.trafikkingx.auth.repository.UserRepository;
import com.trafikkingx.common.exception.custom.AmbulanceNotFoundException;
import com.trafikkingx.tracking.dto.request.UpdateLocationRequest;
import com.trafikkingx.tracking.event.LocationUpdatedEvent;
import org.springframework.context.ApplicationEventPublisher;
import com.trafikkingx.tracking.service.TrackingUpdateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class TrackingUpdateServiceImpl
        implements TrackingUpdateService {

    private final AmbulanceRepository ambulanceRepository;

    private final UserRepository userRepository;

    private final ApplicationEventPublisher eventPublisher;

    private User getCurrentUser() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return userRepository
                .findByEmail(email)
                .orElseThrow(
                        () -> new UsernameNotFoundException(
                                "User not found."
                        )
                );
    }

    private Ambulance getCurrentAmbulance() {

        User user = getCurrentUser();

        return ambulanceRepository
                .findByUser(user)
                .orElseThrow(
                        AmbulanceNotFoundException::new
                );
    }

    @Override
    @Transactional
    public void updateLocation(
            UpdateLocationRequest request
    ) {

        Ambulance ambulance =
                getCurrentAmbulance();

        ambulance.setCurrentLatitude(
                request.getLatitude()
        );

        ambulance.setCurrentLongitude(
                request.getLongitude()
        );

        ambulance.setLastLocationUpdatedAt(
                LocalDateTime.now()
        );

        ambulanceRepository.save(
        ambulance
);

eventPublisher.publishEvent(

        new LocationUpdatedEvent(

                ambulance.getId(),

                ambulance.getUser().getId(),

                ambulance.getCurrentLatitude(),

                ambulance.getCurrentLongitude()

        )

);

log.info(
        "Location updated for ambulance {}",
        ambulance.getId()
);

    }

}
package com.trafikkingx.tracking.calculator;

import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.assignment.util.GeoLocationUtil;
import com.trafikkingx.incident.entity.Incident;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class TrackingCalculatorImpl
        implements TrackingCalculator {

    private static final double
            DEFAULT_SPEED_KM_PER_HOUR = 40.0;

    @Override
    public Double calculateRemainingDistance(
            Ambulance ambulance,
            Incident incident) {

        return GeoLocationUtil.calculateDistance(

                ambulance.getCurrentLatitude(),

                ambulance.getCurrentLongitude(),

                incident.getLatitude(),

                incident.getLongitude()

        );

    }

    @Override
    public Integer calculateEtaMinutes(
            Ambulance ambulance,
            Incident incident) {

        double distance =
                calculateRemainingDistance(
                        ambulance,
                        incident
                );

        return (int) Math.ceil(

                (distance / DEFAULT_SPEED_KM_PER_HOUR)

                        * 60

        );

    }

}
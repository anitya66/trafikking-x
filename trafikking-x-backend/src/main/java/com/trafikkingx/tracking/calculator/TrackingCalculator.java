package com.trafikkingx.tracking.calculator;

import com.trafikkingx.ambulance.entity.Ambulance;
import com.trafikkingx.incident.entity.Incident;

public interface TrackingCalculator {

    Integer calculateEtaMinutes(
            Ambulance ambulance,
            Incident incident
    );

    Double calculateRemainingDistance(
            Ambulance ambulance,
            Incident incident
    );

}
package com.trafikkingx.assignment.strategy;

import com.trafikkingx.assignment.enums.ResourceType;
import com.trafikkingx.assignment.model.ResourceCandidate;
import com.trafikkingx.incident.entity.Incident;

public interface AssignmentStrategy {

    /**
     * Returns the resource type handled by this strategy.
     */
    ResourceType getResourceType();

    /**
     * Finds the best resource for the given incident.
     */
    ResourceCandidate findBestResource(
            Incident incident
    );
}
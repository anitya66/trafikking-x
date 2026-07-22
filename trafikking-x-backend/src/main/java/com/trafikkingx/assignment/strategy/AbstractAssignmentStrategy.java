package com.trafikkingx.assignment.strategy;

import com.trafikkingx.assignment.model.ResourceCandidate;
import com.trafikkingx.incident.entity.Incident;

import java.util.Comparator;
import java.util.List;

public abstract class AbstractAssignmentStrategy<T>
        implements AssignmentStrategy {

    /**
     * Load all available resources.
     */
    protected abstract List<T> getResources();

    /**
     * Business eligibility check.
     */
    protected abstract boolean isEligible(T resource);

    /**
     * Convert resource into ResourceCandidate.
     */
    protected abstract ResourceCandidate toCandidate(
            T resource,
            Incident incident
    );

    @Override
    public ResourceCandidate findBestResource(
            Incident incident) {

        return getResources()

                .stream()

                .filter(this::isEligible)

                .map(resource ->
                        toCandidate(resource, incident)
                )

                .min(
                        Comparator.comparingDouble(
                                ResourceCandidate::getScore
                        )
                )

                .orElse(null);
    }
}
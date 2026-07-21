package com.trafikkingx.police.specification;

import com.trafikkingx.police.entity.PoliceStation;
import com.trafikkingx.police.enums.PoliceStationType;
import org.springframework.data.jpa.domain.Specification;

public final class PoliceStationSpecification {

    private PoliceStationSpecification() {
    }

    public static Specification<PoliceStation> hasCity(
            String city) {

        return (root, query, cb) ->

                city == null || city.isBlank()
                        ? cb.conjunction()
                        : cb.equal(
                                cb.lower(root.get("city")),
                                city.toLowerCase()
                        );
    }

    public static Specification<PoliceStation> hasType(
            PoliceStationType type) {

        return (root, query, cb) ->

                type == null
                        ? cb.conjunction()
                        : cb.equal(
                                root.get("stationType"),
                                type
                        );
    }

    public static Specification<PoliceStation> isActive() {

        return (root, query, cb) ->
                cb.isTrue(root.get("active"));
    }
}
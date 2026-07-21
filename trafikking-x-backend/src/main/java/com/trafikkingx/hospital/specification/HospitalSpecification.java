package com.trafikkingx.hospital.specification;

import com.trafikkingx.hospital.entity.Hospital;
import com.trafikkingx.hospital.enums.HospitalType;
import org.springframework.data.jpa.domain.Specification;

public final class HospitalSpecification {

    private HospitalSpecification() {
    }

    public static Specification<Hospital> hasCity(String city) {

        return (root, query, cb) ->

                city == null || city.isBlank()
                        ? cb.conjunction()
                        : cb.equal(
                                cb.lower(root.get("city")),
                                city.toLowerCase()
                        );
    }

    public static Specification<Hospital> hasType(
            HospitalType type) {

        return (root, query, cb) ->

                type == null
                        ? cb.conjunction()
                        : cb.equal(
                                root.get("hospitalType"),
                                type
                        );
    }

    public static Specification<Hospital> isActive() {

        return (root, query, cb) ->
                cb.isTrue(root.get("active"));
    }
}
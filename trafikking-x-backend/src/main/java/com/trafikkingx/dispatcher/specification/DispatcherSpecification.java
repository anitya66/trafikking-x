package com.trafikkingx.dispatcher.specification;

import com.trafikkingx.dispatcher.entity.Dispatcher;
import com.trafikkingx.dispatcher.enums.DispatcherStatus;
import org.springframework.data.jpa.domain.Specification;

public class DispatcherSpecification {

    public static Specification<Dispatcher> hasStatus(
            DispatcherStatus status) {

        return (root, query, cb) ->

                status == null

                        ? cb.conjunction()

                        : cb.equal(root.get("status"), status);
    }

    public static Specification<Dispatcher> hasZone(
            String zone) {

        return (root, query, cb) ->

                zone == null || zone.isBlank()

                        ? cb.conjunction()

                        : cb.like(
                        cb.lower(root.get("zone")),
                        "%" + zone.toLowerCase() + "%"
                );
    }

    public static Specification<Dispatcher> isActive() {

        return (root, query, cb) ->

                cb.isTrue(root.get("active"));
    }
}
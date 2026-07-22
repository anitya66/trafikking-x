package com.trafikkingx.dispatcher.repository;

import com.trafikkingx.dispatcher.entity.Dispatcher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface DispatcherRepository extends
        JpaRepository<Dispatcher, Long>,
        JpaSpecificationExecutor<Dispatcher> {

    Optional<Dispatcher> findByEmployeeId(String employeeId);

    boolean existsByEmployeeId(String employeeId);

    boolean existsByUserId(Long userId);
}
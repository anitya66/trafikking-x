package com.trafikkingx.hospital.mapper;

import com.trafikkingx.hospital.dto.request.CreateHospitalRequest;
import com.trafikkingx.hospital.dto.request.UpdateHospitalRequest;
import com.trafikkingx.hospital.dto.response.HospitalResponse;
import com.trafikkingx.hospital.entity.Hospital;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface HospitalMapper {

    Hospital toEntity(CreateHospitalRequest request);

    HospitalResponse toResponse(Hospital hospital);

    @BeanMapping(
            nullValuePropertyMappingStrategy =
                    NullValuePropertyMappingStrategy.IGNORE
    )
    void updateEntity(
            UpdateHospitalRequest request,
            @MappingTarget Hospital hospital
    );
}
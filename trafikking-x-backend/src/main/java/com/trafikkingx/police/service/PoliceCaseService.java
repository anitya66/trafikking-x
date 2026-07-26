package com.trafikkingx.police.service;

import com.trafikkingx.police.dto.request.AcceptPoliceCaseRequest;
import com.trafikkingx.police.dto.request.UpdatePoliceCaseStatusRequest;
import com.trafikkingx.police.dto.response.IncomingPoliceCaseResponse;
import com.trafikkingx.police.dto.response.PoliceCaseResponse;

import java.util.List;

public interface PoliceCaseService {

    List<IncomingPoliceCaseResponse> getIncomingCases();

    PoliceCaseResponse acceptCase(
            Long dispatchId,
            AcceptPoliceCaseRequest request
    );

    PoliceCaseResponse getPoliceCase(
            Long id
    );

    PoliceCaseResponse updateStatus(
            Long id,
            UpdatePoliceCaseStatusRequest request
    );

    List<PoliceCaseResponse> getHistory();

}
package com.dev.backend.payload.request;

import java.util.List;

public class VoteRequest {
    private Long userId;
    private List<Long> candidateId;
    public VoteRequest() {
    }

    public VoteRequest(Long userId, List<Long> candidateId) {
        this.userId = userId;
        this.candidateId = candidateId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<Long> getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(List<Long> candidateId) {
        this.candidateId = candidateId;
    }
}

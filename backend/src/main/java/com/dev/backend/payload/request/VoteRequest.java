package com.dev.backend.payload.request;

public class VoteRequest {
    private Long candidateId;
    public VoteRequest() {
    }

    public VoteRequest( Long candidateId, Long roleId) {
        this.candidateId = candidateId;
    }
    public Long getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(Long candidateId) {
        this.candidateId = candidateId;
    }
}

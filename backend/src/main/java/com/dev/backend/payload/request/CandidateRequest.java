package com.dev.backend.payload.request;

import java.util.List;

public class CandidateRequest {
    private String name;

    private Long partylist;

    private String introduction;

    private Long candidateRole;

    private List<String> awards;

    private List<String> platforms;
    private int voteCount;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPartylist() {
        return partylist;
    }

    public void setPartylist(Long partylist) {
        this.partylist = partylist;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public Long getCandidateRole() {
        return candidateRole;
    }

    public void setCandidateRole(Long candidateRole) {
        this.candidateRole = candidateRole;
    }

    public List<String> getAwards() {
        return awards;
    }

    public void setAwards(List<String> awards) {
        this.awards = awards;
    }

    public List<String> getPlatforms() {
        return platforms;
    }

    public void setPlatforms(List<String> platforms) {
        this.platforms = platforms;
    }

    public int getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(int voteCount) {
        this.voteCount = voteCount;
    }
}

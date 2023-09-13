package com.dev.backend.payload.response;

import java.util.List;

public class CandidateResponse {
    private Long id;
    private String name;
    private String partylist;
    private String rolename;
    private String introduction;
    private List<String> awards;

    private List<String> platforms;

    public CandidateResponse() {
    }

    public CandidateResponse(Long id, String candidatename, String partyListname, String candidaterolename, String introduction, List<String> awards, List<String> platforms) {
        this.id = id;
        this.name = candidatename;
        this.partylist = partyListname;
        this.rolename = candidaterolename;
        this.introduction = introduction;
        this.awards = awards;
        this.platforms = platforms;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPartylist() {
        return partylist;
    }

    public void setPartylist(String partylist) {
        this.partylist = partylist;
    }

    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
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
}

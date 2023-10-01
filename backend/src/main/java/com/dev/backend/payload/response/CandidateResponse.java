package com.dev.backend.payload.response;

import java.util.List;

public class CandidateResponse {
    private Long id;
    private String name;
    private String partylist;
    private Long roleId;
    private String rolename;
    private String introduction;
    private List<String> awards;

    private List<String> platforms;

    private int voteCount;

    public CandidateResponse() {
    }

    public CandidateResponse(Long id, String name, String partylist, Long roleId, String rolename, String introduction, List<String> awards, List<String> platforms, int voteCount) {
        this.id = id;
        this.name = name;
        this.partylist = partylist;
        this.roleId = roleId;
        this.rolename = rolename;
        this.introduction = introduction;
        this.awards = awards;
        this.platforms = platforms;
        this.voteCount = voteCount;
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

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
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

    public int getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(int voteCount) {
        this.voteCount = voteCount;
    }
}

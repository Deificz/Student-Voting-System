package com.dev.backend.payload.response;

import com.dev.backend.entity.Vote;

import java.util.List;

public class UserInfoResponse {
    private Long id;
    private String studentnumber;
    private String firstname;
    private String lastname;
    private String middlename;
    private String email;
    private boolean hasvoted;

    private List<Long> votedCandidates;

    private List<String> roles;

    public UserInfoResponse(Long id, String studentnumber, String firstname, String lastname, String middlename, String email, boolean hasvoted, List<Long> votedCandidates, List<String> roles) {
        this.id = id;
        this.studentnumber = studentnumber;
        this.firstname = firstname;
        this.lastname = lastname;
        this.middlename = middlename;
        this.email = email;
        this.hasvoted = hasvoted;
        this.votedCandidates = votedCandidates;
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStudentnumber() {
        return studentnumber;
    }

    public void setStudentnumber(String studentnumber) {
        this.studentnumber = studentnumber;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getMiddlename() {
        return middlename;
    }

    public void setMiddlename(String middlename) {
        this.middlename = middlename;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isHasvoted() {
        return hasvoted;
    }

    public void setHasvoted(boolean hasvoted) {
        this.hasvoted = hasvoted;
    }

    public List<String> getRoles() {
        return roles;
    }

    public List<Long> getVotedCandidates() {
        return votedCandidates;
    }

    public void setVotedCandidates(List<Long> votedCandidates) {
        this.votedCandidates = votedCandidates;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}

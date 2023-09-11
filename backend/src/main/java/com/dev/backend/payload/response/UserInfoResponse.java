package com.dev.backend.payload.response;

import java.util.List;

public class UserInfoResponse {
    private Long id;
    private String studentnumber;
    private String firstname;
    private String lastname;
    private String middlename;
    private String email;
    private boolean hasvoted;

    private List<String> roles;

    public UserInfoResponse(Long id, String studentNumber, String firstName, String lastName, String middleName, String email, boolean hasVoted, List<String> roles) {
        this.id = id;
        this.studentnumber = studentNumber;
        this.firstname = firstName;
        this.lastname = lastName;
        this.middlename = middleName;
        this.email = email;
        this.hasvoted = hasVoted;
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
}

package com.dev.backend.security.services;

import com.dev.backend.entity.Vote;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.dev.backend.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class UserDetailsImpl implements UserDetails {
    private static final long serialVersionUID = 1L;
    private Long id;
    private String studentNumber;
    private String firstName;
    private String lastName;
    private String middleName;
    private String email;
    @JsonIgnore

    private String password;
    private boolean hasVoted;
    private List<Vote> votedCandidates;
    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(Long id, String studentNumber, String firstName, String lastName, String middleName, String email, String password, boolean hasVoted, List<Vote> votedCandidates, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.studentNumber = studentNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.email = email;
        this.password = password;
        this.hasVoted = hasVoted;
        this.votedCandidates = votedCandidates;
        this.authorities = authorities;
    }

    public static UserDetailsImpl build(User user) {
        List<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());

        return new UserDetailsImpl(
                user.getId(),
                user.getStudentNumber(),
                user.getFirstName(),
                user.getLastName(),
                user.getMiddleName(),
                user.getEmail(),
                user.getPassword(),
                user.isHasVoted(),
                user.getVotes(),
                authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public Long getId() {
        return id;
    }

    public String getStudentNumber() {
        return studentNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public String getEmail() {
        return email;
    }

    public boolean isHasVoted() {
        return hasVoted;
    }

    public List<Vote> getVotedCandidates() {
        return votedCandidates;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

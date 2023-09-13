package com.dev.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String partyList;

    @NotBlank
    @Size(max = 10000)
    private String introduction;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "candidate_role_id", referencedColumnName = "id")
    private CandidateRole candidateRole;

    @ElementCollection
    @Size(max = 10000)
    private List<String> awards;

    @ElementCollection
    @Size(max = 10000)
    private List<String> platforms;

    public Candidate() {
    }

    public Candidate(Long id, String name, String partyList, String introduction, CandidateRole candidateRole) {
        this.id = id;
        this.name = name;
        this.partyList = partyList;
        this.introduction = introduction;
        this.candidateRole = candidateRole;
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

    public String getPartyList() {
        return partyList;
    }

    public void setPartyList(String partyList) {
        this.partyList = partyList;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public CandidateRole getCandidateRole() {
        return candidateRole;
    }

    public void setCandidateRole(CandidateRole candidateRole) {
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
}
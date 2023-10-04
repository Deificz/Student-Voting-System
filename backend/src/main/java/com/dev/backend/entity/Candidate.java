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
    @Size(max = 500)
    private String image;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "partylist_id", referencedColumnName = "id")
    private PartyList partylist;

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

    private int voteCount;

    public Candidate() {
    }

    public Candidate(String name, PartyList partylist, String introduction, CandidateRole candidateRole) {
        this.name = name;
        this.partylist = partylist;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public PartyList getPartylist() {
        return partylist;
    }

    public void setPartylist(PartyList partylist) {
        this.partylist = partylist;
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

    public int getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(int voteCount) {
        this.voteCount = voteCount;
    }

    public void incrementVoteCount() {
        this.voteCount++;
    }
}

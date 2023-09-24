package com.dev.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Partylist_Candidate_Role",
        uniqueConstraints = {
        @UniqueConstraint(columnNames = {"partylist_id", "role_id", "candidate_id"})
        })
public class PartylistCandidateRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "partylist_id")
    private PartyList partylist;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private CandidateRole role;

    @ManyToOne
    @JoinColumn(name = "candidate_id")
    private Candidate candidate;
}

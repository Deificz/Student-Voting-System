package com.dev.backend.entity;

import jakarta.persistence.*;

@Entity
@Table
public class PartyList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "partylist_name")
    private String partylistName;

    @Column(name = "description")
    private String description;

    public PartyList() {
    }

    public PartyList(Long id, String partylistName, String description) {
        this.id = id;
        this.partylistName = partylistName;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPartylistName() {
        return partylistName;
    }

    public void setPartylistName(String partylistName) {
        this.partylistName = partylistName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

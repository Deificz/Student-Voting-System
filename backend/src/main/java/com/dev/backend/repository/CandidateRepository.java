package com.dev.backend.repository;


import com.dev.backend.entity.Candidate;
import com.dev.backend.entity.CandidateRole;
import com.dev.backend.entity.PartyList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {
    Optional<Candidate> findByCandidateRoleId(Long id);

    boolean existsByCandidateRoleAndPartylist(CandidateRole candidateRole, PartyList partyList);
}

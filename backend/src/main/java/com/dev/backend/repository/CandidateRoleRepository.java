package com.dev.backend.repository;

import com.dev.backend.entity.CandidateRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidateRoleRepository extends JpaRepository<CandidateRole, Long> {
}

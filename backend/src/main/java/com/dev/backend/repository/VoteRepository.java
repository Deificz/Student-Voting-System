package com.dev.backend.repository;

import com.dev.backend.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
    List<Vote> findByUserId(Long userId);
    @Query("SELECT v.candidate.id FROM Vote v WHERE v.user.id = :userId")
    List<Long> findCandidateIdsByUserId(@Param("userId") Long userId);
}

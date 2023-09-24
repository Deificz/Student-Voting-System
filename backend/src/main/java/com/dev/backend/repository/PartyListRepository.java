package com.dev.backend.repository;

import com.dev.backend.entity.PartyList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartyListRepository extends JpaRepository<PartyList, Long> {
}

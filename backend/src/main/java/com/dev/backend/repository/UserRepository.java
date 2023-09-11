package com.dev.backend.repository;

import com.dev.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
//    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    Boolean existsByStudentNumber(String studentNumber);

    Boolean existsByEmail(String email);
}

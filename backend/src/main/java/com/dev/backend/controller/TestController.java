package com.dev.backend.controller;

import com.dev.backend.entity.Candidate;
import com.dev.backend.entity.CandidateRole;
import com.dev.backend.payload.response.CandidateResponse;
import com.dev.backend.repository.CandidateRepository;
import com.dev.backend.repository.CandidateRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private CandidateRoleRepository candidateRoleRepository;

    @GetMapping("/all")
    public ResponseEntity<?> allAccess() {
        List<Candidate> candidateList = candidateRepository.findAll();

        return ResponseEntity.ok().body(candidateList);
    }

//    @GetMapping("/candidate/{id}")
//    public ResponseEntity<?> getCandidate(@PathVariable Long id){
//        Optional<Candidate> candidate = candidateRepository.findById(id);
//        if (candidate.isPresent()){
//            CandidateRole candidateRole = candidateRoleRepository.getReferenceById(candidate.get().getId());
//            return ResponseEntity.ok().body(new CandidateResponse(candidate.get().getId(), candidate.get().getName(), candidate.get().getPartyList(), candidateRole.getRoleName(), awards, platforms));
//        }
//        else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public String userAccess() {
        return "User Content.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Board.";
    }
}
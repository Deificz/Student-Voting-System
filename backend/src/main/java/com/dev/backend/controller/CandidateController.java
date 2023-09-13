package com.dev.backend.controller;

import com.dev.backend.entity.Candidate;
import com.dev.backend.entity.CandidateRole;
import com.dev.backend.payload.response.CandidateResponse;
import com.dev.backend.repository.CandidateRepository;
import com.dev.backend.repository.CandidateRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1")
public class CandidateController {
    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private CandidateRoleRepository candidateRoleRepository;

    @GetMapping("/candidate")
    public List<CandidateResponse> getAllCandidates(){
        List<Candidate> candidateList = candidateRepository.findAll();
        return candidateList.stream()
                .map(candidate -> new CandidateResponse(
                        candidate.getId(),
                        candidate.getName(),
                        candidate.getPartyList(),
                        candidate.getCandidateRole().getRoleName(),
                        candidate.getIntroduction(),
                        candidate.getAwards(),
                        candidate.getPlatforms()))
                .collect(Collectors.toList());
    }

    @GetMapping("/candidate/{id}")
    public ResponseEntity<?> getCandidateByID(@PathVariable Long id){
        Optional<Candidate> candidate = candidateRepository.findById(id);
        if (candidate.isPresent()){
            CandidateRole candidateRole = candidateRoleRepository.getReferenceById(candidate.get().getId());
            return ResponseEntity.ok().body(new CandidateResponse(
                    candidate.get().getId(),
                    candidate.get().getName(),
                    candidate.get().getPartyList(),
                    candidateRole.getRoleName(),
                    candidate.get().getIntroduction(),
                    candidate.get().getAwards(),
                    candidate.get().getPlatforms()));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}

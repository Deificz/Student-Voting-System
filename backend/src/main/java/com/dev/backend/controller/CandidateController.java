package com.dev.backend.controller;

import com.dev.backend.entity.*;
import com.dev.backend.payload.request.VoteRequest;
import com.dev.backend.payload.response.CandidateResponse;
import com.dev.backend.payload.response.MessageResponse;
import com.dev.backend.repository.CandidateRepository;
import com.dev.backend.repository.CandidateRoleRepository;
import com.dev.backend.repository.UserRepository;
import com.dev.backend.repository.VoteRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private VoteRepository voteRepository;

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
    @PostMapping("/candidate/vote")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> vote(@Valid @RequestBody List<VoteRequest> voteRequest){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String email = userDetails.getUsername();
            User user = userRepository.findByEmail(email).orElse(null);
            if (user != null) {
                if (user.isHasVoted()){
                    return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new MessageResponse("User already voted!"));
                }
                for (VoteRequest voteRequest1 : voteRequest) {
                    Optional<Candidate> candidate = candidateRepository.findById(voteRequest1.getCandidateId());

                    if (candidate.isPresent()) {
                        Vote vote = new Vote();
                        vote.setUser(user);
                        vote.setCandidate(candidate.get());
                        voteRepository.save(vote);
                    } else {
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageResponse("Invalid candidate ID provided."));
                    }
                }
                user.setHasVoted(true);
                userRepository.save(user);
                return ResponseEntity.ok("Vote saved successfully.");
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not authenticated.");
    }
}

package com.dev.backend.controller;

import com.dev.backend.entity.*;
import com.dev.backend.payload.request.VoteRequest;
import com.dev.backend.payload.response.CandidateResponse;
import com.dev.backend.payload.response.DataResponse;
import com.dev.backend.payload.response.MessageResponse;
import com.dev.backend.repository.CandidateRepository;
import com.dev.backend.repository.CandidateRoleRepository;
import com.dev.backend.repository.UserRepository;
import com.dev.backend.repository.VoteRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
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
    public ResponseEntity<?> vote(@Valid @RequestBody VoteRequest voteRequest){
        Long userId = voteRequest.getUserId();
        List<Long> candidateIds = voteRequest.getCandidateId();
        User user = userRepository.findById(userId).orElse(null);
        if (user != null){
            if (user.isHasVoted())
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new MessageResponse("User already voted!"));
            List<Vote> votes = new ArrayList<>();
            for (Long candidateId : candidateIds) {
                Optional<Candidate> candidateOptional = candidateRepository.findById(candidateId);
                if (candidateOptional.isPresent()) {
                    Candidate candidate = candidateOptional.get();
                    Vote vote = new Vote();
                    vote.setUser(user);
                    vote.setCandidate(candidate);
                    voteRepository.save(vote);
                }
            }
            user.setHasVoted(true);
            userRepository.save(user);
            return ResponseEntity.ok(new MessageResponse("Vote saved successfully."));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageResponse("User not found!"));
    }

    @GetMapping("/user/{id}/votes")
    public ResponseEntity<?> getVotedCandidate(@PathVariable Long id){
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()){
            List<Long> votes = voteRepository.findCandidateIdsByUserId(id);
            return ResponseEntity.ok().body(new DataResponse(HttpStatus.OK.value(), votes));
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new DataResponse(HttpStatus.NOT_FOUND.value(), null));
    }
}

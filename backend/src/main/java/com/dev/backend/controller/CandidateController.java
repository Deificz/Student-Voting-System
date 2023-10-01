package com.dev.backend.controller;

import com.dev.backend.entity.*;
import com.dev.backend.payload.request.CandidateRequest;
import com.dev.backend.payload.request.VoteRequest;
import com.dev.backend.payload.response.CandidateResponse;
import com.dev.backend.payload.response.DataResponse;
import com.dev.backend.payload.response.MessageResponse;
import com.dev.backend.repository.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    @Autowired
    private PartyListRepository partyListRepository;


    @GetMapping("/candidate")
    public List<CandidateResponse> getAllCandidates(){
        List<Candidate> candidateList = candidateRepository.findAll();
        
        return candidateList.stream()
                .map(candidate -> new CandidateResponse(
                        candidate.getId(),
                        candidate.getName(),
                        candidate.getPartylist().getPartylistName(),
                        candidate.getCandidateRole().getId(),
                        candidate.getCandidateRole().getRoleName(),
                        candidate.getIntroduction(),
                        candidate.getAwards(),
                        candidate.getPlatforms(),
                        candidate.getVoteCount()))
                .collect(Collectors.toList());
    }

    @PostMapping("/candidate")
    public ResponseEntity<?> addCandidate(@RequestBody CandidateRequest candidateRequest){
        Optional<PartyList> partyList = Optional.of(partyListRepository.getReferenceById(candidateRequest.getPartylist()));
        Optional<CandidateRole> candidateRole = Optional.of(candidateRoleRepository.getReferenceById(candidateRequest.getCandidateRole()));
        if (candidateRepository.existsByCandidateRoleAndPartylist(
                candidateRole.get(), partyList.get())) {
            return ResponseEntity.badRequest().body(new MessageResponse(HttpStatus.BAD_REQUEST.value(), "A candidate with the same role already exists in this party list."));
        }

        Candidate candidate = new Candidate(
                candidateRequest.getName(),
                partyList.get(),
                candidateRequest.getIntroduction(),
                candidateRole.get()
        );
        candidate.setAwards(candidateRequest.getAwards());
        candidate.setPlatforms(candidateRequest.getPlatforms());
        candidateRepository.save(candidate);

        return ResponseEntity.ok().body(new MessageResponse(HttpStatus.OK.value(), "Candidate added successfully!"));
    }

    @GetMapping("/candidate/{id}")
    public ResponseEntity<?> getCandidateByID(@PathVariable Long id){
        Optional<Candidate> candidate = candidateRepository.findById(id);
        if (candidate.isPresent()){
            CandidateRole candidateRole = candidateRoleRepository.getReferenceById(candidate.get().getCandidateRole().getId());
            PartyList partyList = partyListRepository.getReferenceById(candidate.get().getPartylist().getId());
            return ResponseEntity.ok().body(new CandidateResponse(
                    candidate.get().getId(),
                    candidate.get().getName(),
                    partyList.getPartylistName(),
                    candidate.get().getCandidateRole().getId(),
                    candidateRole.getRoleName(),
                    candidate.get().getIntroduction(),
                    candidate.get().getAwards(),
                    candidate.get().getPlatforms(),
                    candidate.get().getVoteCount()));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/candidate/{id}")
    public ResponseEntity<?> deleteCandidate(@PathVariable Long id){
        Optional<Candidate> candidate = candidateRepository.findById(id);
        if (candidate.isPresent()){
            List<Vote> votes = voteRepository.findAllByCandidateId(id);
            for (Vote vote:
                 votes) {
                voteRepository.delete(vote);
            }
            Candidate candidateToDelete = candidate.get();
            candidateRepository.delete(candidateToDelete);
            return ResponseEntity.ok().body(new MessageResponse(HttpStatus.OK.value(), "Candidate successfully deleted!"));
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageResponse(HttpStatus.NOT_FOUND.value(), "Candidate with id " + id + " not found."));
    }

    @PutMapping("/candidate/{id}")
    public ResponseEntity<?> updateCandidate(@PathVariable Long id, @RequestBody CandidateRequest candidateRequest){
        Candidate existingCandidate = candidateRepository.findById(id).orElse(null);
        Optional<PartyList> partyList = Optional.of(partyListRepository.getReferenceById(candidateRequest.getPartylist()));
        Optional<CandidateRole> candidateRole = Optional.of(candidateRoleRepository.getReferenceById(candidateRequest.getCandidateRole()));
        if (existingCandidate != null){
            existingCandidate.setName(candidateRequest.getName());
            existingCandidate.setIntroduction(candidateRequest.getIntroduction());
            existingCandidate.setPartylist(partyList.get());
            existingCandidate.setCandidateRole(candidateRole.get());
            existingCandidate.setAwards(candidateRequest.getAwards());
            existingCandidate.setPlatforms(candidateRequest.getPlatforms());

            candidateRepository.save(existingCandidate);
            return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(HttpStatus.OK.value(), "Candidate with id " + id + " successfully edited!" ));
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageResponse(HttpStatus.NOT_FOUND.value(), "Candidate with id " + id + " not found!"));
    }

    @PostMapping("/candidate/vote")
    public ResponseEntity<?> vote(@Valid @RequestBody VoteRequest voteRequest){
        Long userId = voteRequest.getUserId();
        List<Long> candidateIds = voteRequest.getCandidateId();
        User user = userRepository.findById(userId).orElse(null);
        if (user != null){
            if (user.isHasVoted())
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new MessageResponse(HttpStatus.FORBIDDEN.value(), "User already voted!"));
            List<Vote> votes = new ArrayList<>();
            for (Long candidateId : candidateIds) {
                Optional<Candidate> candidateOptional = candidateRepository.findById(candidateId);
                if (candidateOptional.isPresent()) {
                    Candidate candidate = candidateOptional.get();
                    Vote vote = new Vote();
                    vote.setUser(user);
                    vote.setCandidate(candidate);
                    candidate.incrementVoteCount();
                    candidateRepository.save(candidate);
                    voteRepository.save(vote);
                }
            }
            user.setHasVoted(true);
            userRepository.save(user);
            return ResponseEntity.ok(new MessageResponse(HttpStatus.OK.value(), "Vote saved successfully."));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageResponse(HttpStatus.NOT_FOUND.value(), "User not found!"));
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

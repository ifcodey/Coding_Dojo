package com.dolah.exam.service;

import com.dolah.exam.repository.teamRepo;
import com.dolah.exam.repository.userRepo;

import com.dolah.exam.models.Team;
import com.dolah.exam.models.User;
import com.dolah.exam.models.LoginUser;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import java.util.List;

@Service
public class TeamService {


    @Autowired
    private teamRepo teamRepository;

    @Autowired
    private userRepo userRepository;

    public List<Team> allTeam() {

        return teamRepository.findAll();
    }

    public Team findOneTeam(Long id) {
        teamRepository.findTeamById(id);
        if (teamRepository.findTeamById(id).isPresent()) {
            return teamRepository.findTeamById(id).get();
        } else {
            return null;
        }
    }

    public Team createTeam(Team team) {
        return teamRepository.save(team);
    }

    public Team updateTeam(Team team) {
        return teamRepository.save(team);
    }

    public void deleteTeam(Long id) {
        teamRepository.deleteById(id);
    }

}

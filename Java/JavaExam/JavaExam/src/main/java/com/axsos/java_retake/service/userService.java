package com.axsos.java_retake.service;


import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axsos.java_retake.repository.tripRepository;
import com.axsos.java_retake.repository.userRepository;

import com.axsos.java_retake.models.Trip;
import com.axsos.java_retake.models.User;
import com.axsos.java_retake.models.LoginUser;

import org.springframework.validation.BindingResult;

@Service
public class userService {

    @Autowired
    private userRepository userRepo;

    @Autowired
    private tripRepository tripRepo;

    public User register(User newUser, BindingResult result) {
        if (userRepo.findByEmail(newUser.getEmail()).isPresent()) {
            result.rejectValue("email", "Unique", "This email is already in use!");
        }
        if (!newUser.getPassword().equals(newUser.getConfirm())) {
            result.rejectValue("confirm", "Matches", "The Confirm Password must match Password!");
        }
        if (result.hasErrors()) {
            return null;
        } else {
            String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
            newUser.setPassword(hashed);
            return userRepo.save(newUser);
        }
    }

    public User login(LoginUser newLogin, BindingResult result) {
        if (result.hasErrors()) {
            return null;
        }
        Optional<User> potentialUser = userRepo.findByEmail(newLogin.getEmail());
        if (!potentialUser.isPresent()) {
            result.rejectValue("email", "Unique", "Unknown email!");
            return null;
        }
        User user = potentialUser.get();
        if (!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
            result.rejectValue("password", "Matches", "Invalid Password!");
        }
        if (result.hasErrors()) {
            return null;
        } else {
            return user;
        }
    }

    public User findUserById(Long id) {
        Optional<User> optionalUser = userRepo.findById(id);
        return optionalUser.orElse(null);
    }

    public List<User> getAssignedtrips(Trip trip) {
        return userRepo.findAllByJointrip(trip);
    }

    public List<User> getUnassignedtrips(Trip trip) {
        return userRepo.findByJointripNotContains(trip);
    }


}

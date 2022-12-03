package com.dolah.project_manager.service.;

import java.util.List;
import java.util.Optional;

import com.dolah.project_manager.repository.UserRepo;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dolah.project_manager.repository.UserRepo;

import com.dolah.project_manager.models.User;
import com.dolah.project_manager.models.LoginUser;

import org.springframework.validation.BindingResult;

@Service
public class userService {

    @Autowired
    private UserRepo User_Repo;

    public User register(User newUser, BindingResult result) {
        if(User_Repo.findByEmail(newUser.getEmail()).isPresent()) {
            result.rejectValue("email", "Unique", "This email is already in use!");
        }
        if(!newUser.getPassword().equals(newUser.getConfirm())) {
            result.rejectValue("confirm", "Matches", "The Confirm Password must match Password!");
        }
        if(result.hasErrors()) {
            return null;
        } else {
            String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
            newUser.setPassword(hashed);
            return User_Repo.save(newUser);
        }
    }

    public User login(LoginUser newLogin, BindingResult result) {
        if(result.hasErrors()) {
            return null;
        }
        Optional<User> potentialUser = User_Repo.findByEmail(newLogin.getEmail());
        if(!potentialUser.isPresent()) {
            result.rejectValue("email", "Unique", "Unknown email!");
            return null;
        }
        User user = potentialUser.get();
        if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
            result.rejectValue("password", "Matches", "Invalid Password!");
        }
        if(result.hasErrors()) {
            return null;
        } else {
            return user;
        }
    }

    public User findUserById(Long id) {
        Optional<User> optionalUser = User_Repo.findById(id);
        return optionalUser.orElse(null);
    }



}

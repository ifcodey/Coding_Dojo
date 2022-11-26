package com.dolah.exam.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dolah.exam.models.Team;
import com.dolah.exam.models.User;

@Repository
public interface userRepo extends CrudRepository<User, Long>{

    List<User> findAll();

    Optional<User> findByEmail(String email);


    List<User> findByJointeamsNotContains(Team team);
    List<User> findAllByJointeams(Team team);


}

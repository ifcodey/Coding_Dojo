package com.dolah.exam.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dolah.exam.models.Team;

import javax.validation.constraints.Size;


@Repository
public interface teamRepo  extends CrudRepository<Team,Long>{

    List<Team> findAll();

//    find team by id.
    Optional<Team> findTeamById(Long id);

}

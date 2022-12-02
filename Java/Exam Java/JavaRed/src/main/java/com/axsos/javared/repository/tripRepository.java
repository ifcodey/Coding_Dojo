package com.axsos.javared.repository;

import com.axsos.javared.models.Trip;
import com.axsos.javared.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface tripRepository extends CrudRepository<Trip, Long> {

    List<Trip> findAll();


    //    find team by id.
    Optional<Trip> findTripById(Long id);



//    List<Trip> findByBorrowerIdIsOrUserIdIs(Long borrowerID, Long userId);
}



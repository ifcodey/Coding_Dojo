package com.axsos.javared.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.javared.models.Trip;
import com.axsos.javared.models.User;

@Repository
public interface userRepository extends CrudRepository<User, Long> {

    List<User> findAll();

    Optional<User> findByEmail(String email);

    List<User> findByJointripNotContains(Trip trip);
    List<User> findAllByJointrip(Trip trip);

//    List<User> findByJointotripContains(Trip trip);

}

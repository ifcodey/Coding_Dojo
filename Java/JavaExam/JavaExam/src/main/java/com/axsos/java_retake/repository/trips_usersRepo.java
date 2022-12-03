package com.axsos.java_retake.repository;

import com.axsos.java_retake.models.Trip;
import com.axsos.java_retake.models.User;
import com.axsos.java_retake.models.Trips_Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface trips_usersRepo extends CrudRepository<Trips_Users, Long> {

//    Optional<trips_usersRepo> findById(Long id);

    Trips_Users findTrips_UsersByUserAndTripe(User user , Trip trip);
}


package com.axsos.java_retake.service;

import com.axsos.java_retake.models.Trip;
import com.axsos.java_retake.models.User;
import com.axsos.java_retake.models.Trips_Users;

import java.util.Optional;

import com.axsos.java_retake.repository.trips_usersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TU_Service {

    @Autowired
    private trips_usersRepo tuRepo;

    public Trips_Users findtrip_user(Long id) {

        Optional<Trips_Users> obj = tuRepo.findById(id);

        if (obj.isPresent()) {

            return obj.get();
        } else {
            return null;
        }
    }

    public Trips_Users findTrips_UsersByUserAndTripe(User user, Trip trip) {

        return tuRepo.findTrips_UsersByUserAndTripe(user, trip);
    }

    public Trips_Users saveing(Trips_Users tu) {

        return tuRepo.save(tu);
    }
}

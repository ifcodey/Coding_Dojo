package com.axsos.java_retake.service;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.axsos.java_retake.repository.userRepository;
import com.axsos.java_retake.repository.tripRepository;

import com.axsos.java_retake.models.Trip;
import com.axsos.java_retake.models.User;
import com.axsos.java_retake.models.LoginUser;

@Service
public class tripService {

    @Autowired
    private tripRepository tripRepo;

    @Autowired
    private userRepository userRepo;

    public List<Trip> allTrip() {
        return tripRepo.findAll();
    }

    public Trip findOneTrip(Long id) {
        tripRepo.findTripById(id);
        if (tripRepo.findTripById(id).isPresent()) {
            return tripRepo.findTripById(id).get();
        } else {
            return null;
        }
    }

    public Trip createTrip(Trip trip) {
        return tripRepo.save(trip);
    }

    public Trip updateTrip(Trip trip) {
        return tripRepo.save(trip);
    }

    public Trip updateData(Trip trip) {

        Optional<Trip> optionalTrip = tripRepo.findTripById(trip.getId());
        if (optionalTrip.isPresent()) {

            Trip thisTrip = optionalTrip.get();

            thisTrip.setVistors(trip.getVistors());
            thisTrip.setUser(trip.getUser());
            thisTrip.setTitle(trip.getTitle());
            thisTrip.setCapacityTotal(trip.getCapacityTotal());
            thisTrip.setDetail(trip.getDetail());

            return tripRepo.save(thisTrip);
        } else {
            return null;
        }
    }

    public void deleteTrip(Long id) {
        tripRepo.deleteById(id);
    }

    public List<User> Vistors(Long id) {

       Trip trip =  findOneTrip( id);
       return trip.getVistors();
    }

}

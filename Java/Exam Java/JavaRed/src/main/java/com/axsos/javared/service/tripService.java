package com.axsos.javared.service;

import com.axsos.javared.repository.userRepository;
import com.axsos.javared.repository.tripRepository;

import com.axsos.javared.models.Trip;
import com.axsos.javared.models.User;
import com.axsos.javared.models.LoginUser;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import java.util.List;

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

    public void deleteTrip(Long id) {
        tripRepo.deleteById(id);
    }

}

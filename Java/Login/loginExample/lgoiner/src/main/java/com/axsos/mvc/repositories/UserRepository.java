package com.axsos.mvc.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import com.axsos.mvc.models.User;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	// this method retrieves all the books from the database
	List<User> findAll();
    Optional<User> findByEmail(String email);
}


package com.axsos.Login.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.Login.models.Book;
import com.axsos.Login.models.User;

import java.util.Optional;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	// this method retrieves all the books from the database
	List<User> findAll();
	
    Optional<User> findByEmail(String email);
    
	Optional<User> findById(Long id);
}


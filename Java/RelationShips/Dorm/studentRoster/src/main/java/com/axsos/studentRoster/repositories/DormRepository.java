package com.axsos.studentRoster.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.studentRoster.models.Dorm;

import java.util.*;

@Repository
public interface DormRepository extends CrudRepository<Dorm, Long> {

	List<Dorm> findAll();

	Optional<Dorm> findById(Long id);

//	long count();
	
//	void deleteById(Long id);
	
	
//	Long countByNameContaining(String search);
//
//	Long deleteByNameStartingWith(String search);

}

package com.axsos.ninjaPlus.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.ninjaPlus.models.Dojo;
import com.axsos.ninjaPlus.models.Ninja;

import java.util.*;

@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long> {

	List<Ninja> findAll();

	Optional <Ninja> findById(Long id);
	
	
	
//	List<Ninja> find();
	
//	Long countByFirstNameContaining(String search);
//
//	Long deleteByFirstNameStartingWith(String search);
}

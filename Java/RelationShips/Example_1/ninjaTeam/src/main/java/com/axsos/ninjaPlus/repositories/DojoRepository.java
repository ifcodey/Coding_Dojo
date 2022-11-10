package com.axsos.ninjaPlus.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.ninjaPlus.models.Dojo;

import java.util.*;

@Repository
public interface DojoRepository extends CrudRepository<Dojo, Long>{
	
	List<Dojo> findAll();

//	Long countByNameContaining(String search);
//
//	Long deleteByNameStartingWith(String search);
}

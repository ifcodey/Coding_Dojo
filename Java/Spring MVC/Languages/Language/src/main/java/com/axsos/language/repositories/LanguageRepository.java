package com.axsos.language.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.language.models.MLanguage;

import java.util.*;

@Repository
public interface LanguageRepository extends CrudRepository<MLanguage, Long>{
	List<MLanguage> findAll();

//	// this method finds books with descriptions containing the search string

	List<MLanguage> findByCreatorContaining(String search);

//	// this method counts how many titles contain a certain string
	Long countByNameContaining(String search);
//
//	// this method deletes a book that starts with a specific title
	Long deleteByNameStartingWith(String search);
}
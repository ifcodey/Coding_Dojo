package com.axsos.language.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.language.models.MLanguage;

import java.util.*;

@Repository
public interface LanguageRepository extends CrudRepository<MLanguage, Long>{
	List<MLanguage> findAll();

//	// this method finds books with descriptions containing the search string
<<<<<<< HEAD
	List<MLanguage> findByCreatorContaining(String search);

=======
	List<MLanguage> findByDescriptionContaining(String search);
//
>>>>>>> 6ddf5258c65248ec5ccd27d85d47b0534512bc87
//	// this method counts how many titles contain a certain string
	Long countByNameContaining(String search);
//
//	// this method deletes a book that starts with a specific title
	Long deleteByNameStartingWith(String search);
}
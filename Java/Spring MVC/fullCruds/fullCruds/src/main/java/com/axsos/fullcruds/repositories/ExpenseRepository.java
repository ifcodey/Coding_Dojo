package com.axsos.fullcruds.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.fullcruds.models.Expense;

import java.util.*;

@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Long> {
	List<Expense> findAll();

//	// this method finds books with descriptions containing the search string
	List<Expense> findByDescriptionContaining(String search);
//
//	// this method counts how many titles contain a certain string
	Long countByNameContaining(String search);
//
//	// this method deletes a book that starts with a specific title
	Long deleteByNameStartingWith(String search);
}

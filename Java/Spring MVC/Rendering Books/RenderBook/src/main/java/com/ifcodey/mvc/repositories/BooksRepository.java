package com.ifcodey.mvc.repositories;
import com.ifcodey.mvc.models.Books;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface BooksRepository extends CrudRepository<Books, Long> {
	// this method retrieves all the books from the database
	List<Books> findAll();

	// this method finds books with descriptions containing the search string
	List<Books> findByDescriptionContaining(String search);

	// this method counts how many titles contain a certain string
	Long countByTitleContaining(String search);

	// this method deletes a book that starts with a specific title
	Long deleteByTitleStartingWith(String search);

	Long deleteById(Integer id);
}


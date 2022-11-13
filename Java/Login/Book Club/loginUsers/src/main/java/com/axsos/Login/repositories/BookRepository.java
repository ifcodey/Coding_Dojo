package com.axsos.Login.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.Login.models.Book;
import com.axsos.Login.models.User;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
	List<Book> findAll();

	List<Book> findAllByUser(User user);

	// Retrieves a list of any categories a particular product
	// does not belong to.
	List<Book> findByUserNotContains(User user);

	List<Book> findByBorrow_idIs(Long id);

	List<Book> findByBorrow_idNotContains(Long id);

	List<Book> findByBorrow_idIsOrUser_idIs(Long borrow_id, Long user_id);

	List<Book> findByBorrowNull();

	@Query(value = "select * from books join users on books.user_id = users.id where ?1 !=  books.borrow_id", nativeQuery = true)
	List<Book> AllBookNoBorrow(Long id);
}

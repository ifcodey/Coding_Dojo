package com.axsos.Login.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

//------------------Model---------------------

import com.axsos.Login.models.Book;
import com.axsos.Login.models.LoginUser;
import com.axsos.Login.models.User;

//------------------Repository---------------------

import com.axsos.Login.repositories.BookRepository;
import com.axsos.Login.repositories.UserRepository;

@Service
public class BookService {

	@Autowired
	private BookRepository bookRepo;

//	@Autowired
//	private UserRepository userRepo;

	// ------------------Find---------------------

	public List<Book> allBooks() {
		return bookRepo.findAll();
	}

	public List<Book> unborrowerBooks(User user) {
		return bookRepo.findByBorrowerIdIsOrUserIdIs(null, user.getId());
	}

	public List<Book> borrowerBooks(User user) {
		return bookRepo.findByBorrowerIdIs(user.getId());
	}

	public List<Book> borrowerBooks_2(User user) {
		return bookRepo.findByBorrowerIdIsOrUserIdIs(user.getId(), null);
	}

	public List<Book> myBooks(User user) {
		return bookRepo.findByUserIdIs(user.getId());
	}

	public Book findBook(Long id) {
		Optional<Book> optionalBook = bookRepo.findById(id);
		if (optionalBook.isPresent()) {
			return optionalBook.get();
		} else {
			return null;
		}
	}

	public Book findBookQuary(Long id) {
		Optional<Book> optionalBook = bookRepo.findById_Quary(id);
		if (optionalBook.isPresent()) {
			return optionalBook.get();
		} else {
			return null;
		}
	}

	// ------------------Create / Update---------------------

	public Book createBook(Book book) {
		return bookRepo.save(book);
	}

	public Book updateBook(Book book) {
		return bookRepo.save(book);
	}

	public void addBorrower(Book book, User user) {
		book.setBorrower(user);
		bookRepo.save(book);
	}
	
	public Book updateBookAdvance(Long id, Book book) {
		Optional<Book> optionalBook = bookRepo.findById(book.getId());

		if (optionalBook.isPresent()) {

			Book thisBook = optionalBook.get();

			thisBook.setTitle(book.getTitle());
			thisBook.setMyThoughts(book.getMyThoughts());
			thisBook.setAuthor(book.getAuthor());
			thisBook.setUser(book.getUser());
			return bookRepo.save(thisBook);
		} else {
			return null;
		}
	}

	// ------------------Delete---------------------

	public void deleteBook(Long id) {
		bookRepo.deleteById(id);
	}

	public void deleteById_Quary(Long id) {
		bookRepo.deleteById_Quary(id);
	}

	public void deleteBookSecondMethod(Book book) {
		bookRepo.delete(book);
	}

	public void removeBorrower(Book book) {
		book.setBorrower(null);
		bookRepo.save(book);
	}

}
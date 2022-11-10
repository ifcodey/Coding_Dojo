package com.ifcodey.mvc.services;

import java.util.List;
import java.util.Optional;

//...
import org.springframework.stereotype.Service;

import com.ifcodey.mvc.models.Books;
import com.ifcodey.mvc.repositories.BooksRepository;

@Service
public class BookService {
	// adding the book repository as a dependency
	private final BooksRepository bookRepository;

	public BookService(BooksRepository bookRepository) {
		this.bookRepository = bookRepository;
	}

	// returns all the books
	public List<Books> allBooks() {
		return bookRepository.findAll();
	}

	// creates a book
	public Books createBook(Books b) {
		return bookRepository.save(b);
	}

	public Books updateBook(Long id, String title, String desc, String lang, Integer numOfPages) {
		Books book = findBook(id);

		if (book.getId() == id) {
			book.setTitle(title);
			book.setDescription(desc);
			book.setLanguage(lang);
			book.setNumberOfPages(numOfPages);
			return createBook(book);
		} else {
			return null;
		}
	}

	public void deleteBook(Long id) {
		Optional<Books> optionalBook = bookRepository.findById(id);
		if (optionalBook.isPresent()) {
			bookRepository.deleteById(id);

		}
	}

	// retrieves a book
	public Books findBook(Long id) {
		Optional<Books> optionalBook = bookRepository.findById(id);
		if (optionalBook.isPresent()) {
			return optionalBook.get();
		} else {
			return null;
		}



	}
}
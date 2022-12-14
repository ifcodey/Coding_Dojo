package com.ifcodey.mvc.controllers;

import com.ifcodey.mvc.models.Book;
import com.ifcodey.mvc.services.BookService;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//..

@RestController
public class BooksApi {
	private final BookService bookService;

//--------------------------------------------------------------
//  get the instance from service to used here.
//--------------------------------------------------------------	
	
	public BooksApi(BookService bookService) {
		this.bookService = bookService;
	}
	
//--------------------------------------------------------------
//  test and getting a allbook by connect with Postman/template.
//--------------------------------------------------------------	
	
	@RequestMapping("/api/books")
	public List<Book> index() {
		return bookService.allBooks();
	}

//--------------------------------------------------------------
//  create a book(relate with service and service relate with repo) and send to postman or template.
//--------------------------------------------------------------
	
	@RequestMapping(value = "/api/books", method = RequestMethod.POST)
	public Book create(@RequestParam(value = "title") String title, @RequestParam(value = "description") String desc,
			@RequestParam(value = "language") String lang, @RequestParam(value = "pages") Integer numOfPages) {
		Book book = new Book(title, desc, lang, numOfPages);
		return bookService.createBook(book);
	}

//--------------------------------------------------------------
//  show a and getting book relate with id 
//--------------------------------------------------------------
	
	@RequestMapping("/api/books/{id}")
	public Book show(@PathVariable("id") Long id) {
		Book book = bookService.findBook(id);
		
		//return to service and then to repository
		return book;
	}
	
	// other methods removed for brevity
	@RequestMapping(value = "/api/books/{id}", method = RequestMethod.PUT)
	public Book update(@PathVariable("id") Long id, @RequestParam(value = "title") String title,
			@RequestParam(value = "description") String desc, @RequestParam(value = "language") String lang,
			@RequestParam(value = "pages") Integer numOfPages) {
		Book book = bookService.updateBook(id, title, desc, lang, numOfPages);
		return book;
	}

	@RequestMapping(value = "/api/books/{id}", method = RequestMethod.DELETE)
	public void destroy(@PathVariable("id") Long id) {
		bookService.deleteBook(id);
	}
}


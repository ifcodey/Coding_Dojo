package com.ifcodey.mvc.controllers;

import com.ifcodey.mvc.models.Books;
import com.ifcodey.mvc.services.BookService;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
//..

//@RestController
@Controller
public class BooksRender {
	private final BookService bookService;

//--------------------------------------------------------------
//  get the instance from service to used here.
//--------------------------------------------------------------	

	public BooksRender(BookService bookService) {
		this.bookService = bookService;
	}

	@RequestMapping("/books/{id}")
	public String index(Model model, @PathVariable("id") Long id) {

		Books book = bookService.findBook(id);
		model.addAttribute("book", book);
		return "showbook.jsp";
	}

//--------------------------------------------------------------
//  get the instance from service to used here.
//--------------------------------------------------------------
	
	@RequestMapping("/books")
	public String index(Model model) {
		
		List<Books> book2 = bookService.allBooks();
		model.addAttribute("books", book2);
		return "index.jsp";
	}

//--------------------------------------------------------------
//  test and getting a allbook by connect with Postman/template.
//--------------------------------------------------------------	

	@RequestMapping("/api/books")
	public List<Books> index() {
		return bookService.allBooks();
	}

//--------------------------------------------------------------
//  create a book(relate with service and service relate with repo) and send to postman or template.
//--------------------------------------------------------------

	@RequestMapping(value = "/api/books", method = RequestMethod.POST)
	public Books create(@RequestParam(value = "title") String title, @RequestParam(value = "description") String desc,
			@RequestParam(value = "language") String lang, @RequestParam(value = "pages") Integer numOfPages) {
		Books book = new Books(title, desc, lang, numOfPages);
		return bookService.createBook(book);
	}

//--------------------------------------------------------------
//  show a and getting book relate with id 
//--------------------------------------------------------------

	@RequestMapping("/api/books/{id}")
	public Books show(@PathVariable("id") Long id) {
		Books book = bookService.findBook(id);

		// return to service and then to repository
		return book;
	}

	// other methods removed for brevity
	@RequestMapping(value = "/api/books/{id}", method = RequestMethod.PUT)
	public Books update(@PathVariable("id") Long id, @RequestParam(value = "title") String title,
			@RequestParam(value = "description") String desc, @RequestParam(value = "language") String lang,
			@RequestParam(value = "pages") Integer numOfPages) {
		Books book = bookService.updateBook(id, title, desc, lang, numOfPages);
		return book;
	}

	@RequestMapping(value = "/api/books/{id}", method = RequestMethod.DELETE)
	public void destroy(@PathVariable("id") Long id) {
		bookService.deleteBook(id);
	}

}
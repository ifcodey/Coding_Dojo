//package com.ifcodey.mvc.controllers;
//
//import com.ifcodey.mvc.models.Expense;
//import com.ifcodey.mvc.services.ExpenceService;
//
//import java.util.List;
//
//import javax.validation.Valid;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
////..
//
////@RestController
//@Controller
//public class ExpenseControl {
//	private final ExpenceService expService;
//
////--------------------------------------------------------------
////  show all Expense 
////--------------------------------------------------------------	
//
//	public ExpenseControl(ExpenceService expService) {
//		this.expService = expService;
//	}
//
//	@GetMapping("/books")
//	public String loads(Model model) {
//		List<Expense> books = expService.allExpense();
//		model.addAttribute("books", books);
//		return "index.jsp";
//	}
//
////--------------------------------------------------------------
////  show specific Expense 
////--------------------------------------------------------------	
//
//	@GetMapping("/books/{id}")
//	public String onebook(@PathVariable("id") Long id, Model model) {
//		Expense book = expService.findExpense(id);
//		model.addAttribute("book", book);
//		return "viewbook.jsp";
//	}
//
////--------------------------------------------------------------
////  send a object == form data to news.jsp page
////--------------------------------------------------------------	
//
//	@GetMapping("/books/new")
//	public String formdisplay(@ModelAttribute("books") Expense book) {
//
//		return "news.jsp";
//	}
//
////--------------------------------------------------------------
////  getting a object from form to store data in models
////--------------------------------------------------------------		
//
//	@PostMapping("/books")
//	public String create(@Valid @ModelAttribute("books") Expense book, BindingResult result) {
//		if (result.hasErrors()) {
//			return "news.jsp";
//		} else {
//			expService.createExpense(book);
//			return "redirect:/books";
//		}
//	}
//}

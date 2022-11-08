package com.ifcodey.mvc.controllers;

import com.ifcodey.mvc.models.Expense;
import com.ifcodey.mvc.services.ExpenceService;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
//..

//@RestController
@Controller
public class ExpenseController {
	@Autowired
	private final ExpenceService expenseService;

	
	public ExpenseController(ExpenceService expenseService) {
		this.expenseService = expenseService;
	}
	
	@GetMapping("/")
	public String loads(Model model, @ModelAttribute("expenses") Expense book) {

		model.addAttribute("allexpenses", expenseService.allExpense());
		return "index.jsp";
	}

	
	@GetMapping("/expenses")
	public String index(Model model, @ModelAttribute("expenses") Expense expenses) {
		List<Expense> allExpense = expenseService.allExpense();
		model.addAttribute("allexpenses", allExpense);
		return "index.jsp";
	}

	
	@PostMapping("/expenses")
	public String addExpense(@Valid @ModelAttribute("expenses") Expense expense, BindingResult result) {
		if (result.hasErrors()) {
			return "/index.jsp";
		} else {
			expenseService.createExpense(expense);
			return "redirect:/expenses";
		}
	}
	
	@GetMapping("/edit/{id}")
	public String showEditExpense(@PathVariable("id") Long id, Model model) {
		Expense expenseToEdit = expenseService.findExpense(id);
		model.addAttribute("expenseToEdit", expenseToEdit);
		return "/edit.jsp";
	}

	@PutMapping("/edit/{id}")
	public String editExpense(@Valid @ModelAttribute(value = "expenseToEdit") Expense expenseToEdit, BindingResult result
			,@PathVariable(value = "id") long id) {
		if (result.hasErrors()) {
			return "/edit.jsp";
		} else {
			expenseService.updateExpense(id, expenseToEdit);
			return "redirect:/expenses";
		}
	}
//	
//    @DeleteMapping("/delete/{id}")
//    public String destroy(@PathVariable("id") Long id) {
//    	expenseService.deleteExpense(id);
//        return "redirect:/";
//    }
	
	
	
}
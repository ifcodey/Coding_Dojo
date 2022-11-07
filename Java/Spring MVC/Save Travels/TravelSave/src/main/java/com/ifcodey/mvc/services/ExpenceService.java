package com.ifcodey.mvc.services;

import java.util.List;
import java.util.Optional;

//...
import org.springframework.stereotype.Service;

import com.ifcodey.mvc.models.Expense;
import com.ifcodey.mvc.repositories.ExpenseRepository;

@Service
public class ExpenceService {
	// adding the book repository as a dependency
	private final ExpenseRepository expensesRepo;

	public ExpenceService(ExpenseRepository expensesRepo) {
		this.expensesRepo = expensesRepo;
	}

	// returns all the Expense
	public List<Expense> allExpense() {
		return expensesRepo.findAll();
	}

	// creates a book
	public Expense createExpense(Expense b) {
		return expensesRepo.save(b);
	}

	public Expense updateExpense(Long id, String expenseName, String description, String vendor, double amount) {
		Expense book = findExpense(id);

		if (book.getId() == id) {
			book.setExpenseName(expenseName);
			book.setDescription(description);
			book.setVendor(vendor);
			book.setAmount(amount);
			return createExpense(book);
		} else {
			return null;
		}
	}

	public void deleteExpense(Long id) {
		Optional<Expense> optionalExpense= expensesRepo.findById(id);
		if (optionalExpense.isPresent()) {
			expensesRepo.deleteById(id);

		}
	}

	// retrieves a book
	public Expense findExpense(Long id) {
		Optional<Expense> optionalExpense = expensesRepo.findById(id);
		if (optionalExpense.isPresent()) {
			return optionalExpense.get();
		} else {
			return null;
		}



	}
}
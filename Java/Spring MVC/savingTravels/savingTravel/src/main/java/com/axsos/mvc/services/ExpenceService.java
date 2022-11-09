package com.axsos.mvc.services;

import java.util.List;
import java.util.Optional;

//...
import org.springframework.stereotype.Service;

import com.axsos.mvc.models.Expense;
import com.axsos.mvc.repositories.ExpenseRepository;

@Service
public class ExpenceService {
	// adding the book repository as a dependency
	private final ExpenseRepository expenseRepository;

	public ExpenceService(ExpenseRepository expenseRepository) {
		this.expenseRepository = expenseRepository;
	}

	// returns all the Expense
	public List<Expense> allExpense() {
		return expenseRepository.findAll();
	}

	// creates a expense
	public Expense createExpense(Expense expense) {
		return expenseRepository.save(expense);
	}

	// retrieves a expense
	public Expense findExpense(Long id) {
		Optional<Expense> obj = expenseRepository.findById(id);
		if (obj.isPresent()) {
			return obj.get();
		} else {
			return null;
		}

	}

	public Expense updateExpense(Long id, Expense expense) {
		Optional<Expense> optionalExpense = expenseRepository.findById(expense.getId());

		if (optionalExpense.isPresent()) {

			Expense thisExpense = optionalExpense.get();

			thisExpense.setName(expense.getName());
			thisExpense.setDescription(expense.getDescription());
			thisExpense.setVendor(expense.getVendor());
			thisExpense.setAmount(expense.getAmount());
			return expenseRepository.save(thisExpense);
		} else {
			return null;
		}
	}

	public Expense updateExpenseNew(Long id, Expense expense) {

		Expense expenseToEdit = findExpense(id);

		expenseToEdit.setName(expense.getName());
		expenseToEdit.setVendor(expense.getVendor());
		expenseToEdit.setDescription(expense.getDescription());
		expenseToEdit.setAmount(expense.getAmount());
		expenseRepository.save(expenseToEdit);

		return expenseToEdit;

	}

	public void deleteExpense(Long id) {
		Optional<Expense> obj = expenseRepository.findById(id);
		if (obj.isPresent()) {
			expenseRepository.deleteById(id);

		}
	}
}

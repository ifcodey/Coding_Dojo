package com.axsos.language.services;

import java.util.List;
import java.util.Optional;

//...
import org.springframework.stereotype.Service;

import com.axsos.language.models.MLanguage;
import com.axsos.language.repositories.LanguageRepository;

@Service
public class LanguageService {
	// adding the book repository as a dependency
	private final LanguageRepository languageRepository;

	public LanguageService(LanguageRepository languageRepository) {
		this.languageRepository = languageRepository;
	}

	// returns all the Expense
	public List<MLanguage> allLanguage() {
		return languageRepository.findAll();
	}

	// creates a expense
	public MLanguage createLanguage(MLanguage obj) {
		return languageRepository.save(obj);
	}

	// retrieves a expense
	public MLanguage findLanguage(Long id) {
		Optional<MLanguage> obj = languageRepository.findById(id);
		if (obj.isPresent()) {
			return obj.get();
		} else {
			return null;
		}

	}

	public MLanguage updateLanguage(Long id, MLanguage obj) {
		Optional<MLanguage> optionalExpense = languageRepository.findById(obj.getId());

		if (optionalExpense.isPresent()) {

			MLanguage thislanguage = optionalExpense.get();

			thislanguage.setName(obj.getName());
			thislanguage.setCreator(obj.getCreator());
			thislanguage.setVersion(obj.getVersion());
			return languageRepository.save(thislanguage);
		} else {
			return null;
		}
	}

//	public MLanguage updateLanguageNew(Long id, MLanguage expense) {
//
//		MLanguage languageToEdit = findExpense(id);
//
//		languageToEdit.setName(expense.getName());
//		languageToEdit.setCreator(expense.getCreator());
//		languageToEdit.setVersion(expense.getVersion());
//		languageRepository.save(languageToEdit);
//
//		return languageToEdit;
//
//	}

	public void deleteLanguage(Long id) {
		Optional<MLanguage> obj = languageRepository.findById(id);
		if (obj.isPresent()) {
			languageRepository.deleteById(id);

		}
	}
}

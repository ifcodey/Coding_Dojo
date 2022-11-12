package com.axsos.ninjaPlus.services;

import java.util.List;
import java.util.Optional;

//...
import org.springframework.stereotype.Service;

import com.axsos.ninjaPlus.models.Dojo;
import com.axsos.ninjaPlus.repositories.DojoRepository;

@Service
public class dojoService {

	// adding the dojo repository as a dependency
	private final DojoRepository dojoRepository;

	public dojoService(DojoRepository dojoRepository) {
		this.dojoRepository = dojoRepository;
	}

	// returns all the dojo
	public List<Dojo> allDojo() {
		return dojoRepository.findAll();
	}

	// creates a dojo
	public Dojo createDojo(Dojo obj) {
		return dojoRepository.save(obj);
	}

	// retrieves a dojo
	public Dojo findDojo(Long id) {
		Optional<Dojo> obj = dojoRepository.findById(id);
		if (obj.isPresent()) {
			return obj.get();
		} else {
			return null;
		}

	}

	public Dojo updateDojo(Long id, Dojo obj) {
		Optional<Dojo> optionalDojo = dojoRepository.findById(obj.getId());

		if (optionalDojo.isPresent()) {
			Dojo thisDojo = optionalDojo.get();
			thisDojo.setName(obj.getName());
			return dojoRepository.save(thisDojo);
		} else {
			return null;
		}
	}

//		public MLanguage updateLanguageNew(Long id, MLanguage expense) {
	//
//			MLanguage languageToEdit = findExpense(id);
	//
//			languageToEdit.setName(expense.getName());
//			languageToEdit.setCreator(expense.getCreator());
//			languageToEdit.setVersion(expense.getVersion());
//			languageRepository.save(languageToEdit);
	//
//			return languageToEdit;
	//
//		}

	public void deleteLanguage(Long id) {
		Optional<Dojo> obj = dojoRepository.findById(id);
		if (obj.isPresent()) {
			dojoRepository.deleteById(id);

		}
	}
}

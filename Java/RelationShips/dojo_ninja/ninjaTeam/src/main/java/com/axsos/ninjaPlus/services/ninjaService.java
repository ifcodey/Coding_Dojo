package com.axsos.ninjaPlus.services;

import java.util.List;
import java.util.Optional;

//...
import org.springframework.stereotype.Service;

import com.axsos.ninjaPlus.models.Ninja;
import com.axsos.ninjaPlus.repositories.NinjaRepository;

@Service
public class ninjaService {

	// adding the ninja repository as a dependency
	private final NinjaRepository ninjaRepository;

	public ninjaService(NinjaRepository ninjaRepository) {
		this.ninjaRepository = ninjaRepository;
	}

	// returns all the ninja
	public List<Ninja> allNinja() {
		return ninjaRepository.findAll();
	}

	// creates a ninja
	public Ninja createNinja(Ninja obj) {
		return ninjaRepository.save(obj);
	}

	// retrieves a ninja
	public Ninja findDojo(Long id) {
		Optional<Ninja> obj = ninjaRepository.findById(id);
		if (obj.isPresent()) {
			return obj.get();
		} else {
			return null;
		}

	}

	public Ninja updateDojo(Long id, Ninja obj) {
		Optional<Ninja> optionalNinja = ninjaRepository.findById(obj.getId());

		if (optionalNinja.isPresent()) {
			Ninja thisNinja = optionalNinja.get();
			thisNinja.setFirstName(obj.getFirstName());
			return ninjaRepository.save(thisNinja);
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
		Optional<Ninja> obj = ninjaRepository.findById(id);
		if (obj.isPresent()) {
			ninjaRepository.deleteById(id);

		}
	}
}

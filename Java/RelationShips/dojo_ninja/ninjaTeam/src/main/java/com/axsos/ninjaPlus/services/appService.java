package com.axsos.ninjaPlus.services;

import java.util.List;
import java.util.Optional;

//...
import org.springframework.stereotype.Service;

import com.axsos.ninjaPlus.models.Dojo;
import com.axsos.ninjaPlus.repositories.DojoRepository;

import com.axsos.ninjaPlus.models.Ninja;
import com.axsos.ninjaPlus.repositories.NinjaRepository;

@Service
public class appService {

	private final DojoRepository dojoRepository;
	private final NinjaRepository ninjaRepository;

	public appService(DojoRepository dojoRepository, NinjaRepository ninjaRepository) {
		super();
		this.dojoRepository = dojoRepository;
		this.ninjaRepository = ninjaRepository;
	}

	public Ninja createNinja(Ninja n) {
		return ninjaRepository.save(n);
	}

	public Dojo createDojo(Dojo n2) {
		return dojoRepository.save(n2);
	}

	public List<Ninja> allNinja() {
		return ninjaRepository.findAll();
	}

	public List<Dojo> allDojo() {
		return dojoRepository.findAll();
	}

//	SHORTCUT for find dojo
//	retrieves a dojo

	public Dojo findDojo(Long id) {
		return this.dojoRepository.findById(id).orElse(null);
	}

}

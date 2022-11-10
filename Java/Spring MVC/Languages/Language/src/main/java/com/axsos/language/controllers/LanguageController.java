package com.axsos.language.controllers;

import com.axsos.language.models.MLanguage;
import com.axsos.language.services.LanguageService;

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
public class LanguageController {
	@Autowired
	private final LanguageService languageService;

	public LanguageController(LanguageService languageService) {
		this.languageService = languageService;
	}

	@GetMapping("/")
	public String loads(Model model, @ModelAttribute("language") MLanguage language) {

		model.addAttribute("all_language", languageService.allLanguage());
		return "dashboard.jsp";
	}

	@GetMapping("/languages")
	public String index(Model model, @ModelAttribute("language") MLanguage language) {
		List<MLanguage> allObj = languageService.allLanguage();
		model.addAttribute("all_language", allObj);
<<<<<<< HEAD
		return "dashboard.jsp";
=======
		return "index.jsp";
>>>>>>> 6ddf5258c65248ec5ccd27d85d47b0534512bc87
	}

	@PostMapping("/languages")
	public String addExpense(@Valid @ModelAttribute("language") MLanguage language, BindingResult result) {
		if (result.hasErrors()) {
			return "/dashboard.jsp";
		} else {
			languageService.createLanguage(language);
			return "redirect:/languages";
		}
	}

	@GetMapping("/edit/{id}")
<<<<<<< HEAD
	public String showLanguage(@PathVariable("id") Long id, Model model) {
=======
	public String showEditExpense(@PathVariable("id") Long id, Model model) {
>>>>>>> 6ddf5258c65248ec5ccd27d85d47b0534512bc87
		MLanguage languageToEdit = languageService.findLanguage(id);
		model.addAttribute("languageToEdit", languageToEdit);
		return "/edit.jsp";
	}
<<<<<<< HEAD
	
	@PutMapping("/edit/{id}")
	public String editLanguage(@Valid @ModelAttribute(value = "languageToEdit") MLanguage languageToEdit,
=======

	@PutMapping("/edit/{id}")
	public String editExpense(@Valid @ModelAttribute(value = "languageToEdit") MLanguage languageToEdit,
>>>>>>> 6ddf5258c65248ec5ccd27d85d47b0534512bc87
			BindingResult result, @PathVariable(value = "id") long id) {
		if (result.hasErrors()) {
			return "/edit.jsp";
		} else {
			languageService.updateLanguage(id, languageToEdit);
			return "redirect:/languages";
		}
	}

<<<<<<< HEAD
//	used when used form with button
	@DeleteMapping("/deleter/{id}")
	public String destroyButton(@PathVariable("id") Long id) {
		languageService.deleteLanguage(id);
		return "redirect:/";
	}
	
	
	@GetMapping("/delete/{id}")
	public String destroyLink(@PathVariable("id") Long id) {
=======
	@DeleteMapping("/delete/{id}")
	public String destroy(@PathVariable("id") Long id) {
>>>>>>> 6ddf5258c65248ec5ccd27d85d47b0534512bc87
		languageService.deleteLanguage(id);
		return "redirect:/";
	}

	@GetMapping("/show/{id}")
	public String showExpense(@PathVariable("id") Long id, Model model) {
		MLanguage language = languageService.findLanguage(id);
		model.addAttribute("language", language);
<<<<<<< HEAD
		return "/display.jsp";
=======
		return "/expence.jsp";
>>>>>>> 6ddf5258c65248ec5ccd27d85d47b0534512bc87
	}

}

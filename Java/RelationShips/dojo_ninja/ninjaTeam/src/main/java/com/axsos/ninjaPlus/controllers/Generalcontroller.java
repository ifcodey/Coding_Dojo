package com.axsos.ninjaPlus.controllers;

import com.axsos.ninjaPlus.models.Dojo;
import com.axsos.ninjaPlus.models.Ninja;

//import com.axsos.ninjaPlus.services.dojoService;
//import com.axsos.ninjaPlus.services.ninjaService;

import com.axsos.ninjaPlus.services.appService;

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

//import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Generalcontroller {
	@Autowired
	private final appService appsevice;

	public Generalcontroller(appService appsevice) {
		super();
		this.appsevice = appsevice;
	}

// --------------------------------------------------

	@GetMapping("/")
	public String redirectToDojo() {
		return "redirect:/dojos/new";
	}
	
	@GetMapping("/dojos/new")
	public String dojo(@ModelAttribute("dojo") Dojo dojo) {

		return "dojoPage.jsp";
	}

	@PostMapping("/adddojo")
	public String addDojo(@Valid @ModelAttribute("dojo") Dojo dojo ,BindingResult result) {
		if(result.hasErrors()) {
			return "dashborad.jsp";
		}else {
			appsevice.createDojo(dojo);
			return "redirect:/";
		}
	}
	
	// --------------------------------------------------
	// beacuse there select so should used a Model model beacuse there data in jsp	
	@GetMapping("/ninjas/new")
	public String ninja(Model model , @ModelAttribute("ninjas") Ninja ninja) {
		model.addAttribute("alldojos",appsevice.allDojo());
		return "ninjaPage.jsp";
	}
	
	@PostMapping("/addninja")
	public String addNinja(Model model ,@Valid @ModelAttribute("ninjas") Ninja ninja ,BindingResult result) {
		if(result.hasErrors()) {
			model.addAttribute("alldojos",appsevice.allDojo());
			return "dashborad.jsp";
		}else {
			appsevice.createNinja(ninja);
			return "redirect:/";
		}
	}
	// --------------------------------------------------
	
	@GetMapping("/dashboard")
	public String show(Model model , @ModelAttribute("all_ninja") Ninja ninja) {
		model.addAttribute("all_ninja",appsevice.allNinja());
		return "dashboard.jsp";
	}
	
}

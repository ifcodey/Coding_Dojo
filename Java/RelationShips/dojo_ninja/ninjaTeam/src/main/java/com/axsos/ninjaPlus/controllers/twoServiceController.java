package com.axsos.ninjaPlus.controllers;
//package com.axsos.ninjaPlus.controllers;
//
//public class otherController {
//
//}
//package com.axsos.ninjaPlus.controllers;
//
//import com.axsos.ninjaPlus.models.Dojo;
//import com.axsos.ninjaPlus.models.Ninja;
//
////import com.axsos.ninjaPlus.services.dojoService;
////import com.axsos.ninjaPlus.services.ninjaService;
//
//import com.axsos.ninjaPlus.services.appService;
//
//import java.util.List;
//import javax.validation.Valid;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
//
////import org.springframework.web.bind.annotation.RequestMapping;
//
//@Controller
//public class Generalcontroller {
//	@Autowired
//	private final dojoService dojoServ;
//	private final ninjaService ninjaServ;
//
//	public Generalcontroller(dojoService dojoServ, ninjaService ninjaServ) {
//		super();
//		this.dojoServ = dojoServ;
//		this.ninjaServ = ninjaServ;
//	}
//
//// --------------------------------------------------
//	@GetMapping("/")
//	public String loads(Model model, @ModelAttribute("ninjas") Ninja ninjas) {
//
//		model.addAttribute("all_ninja", ninjaServ.allNinja());
//		return "dashboard.jsp";
//	}
//
//	@GetMapping("/ninja")
//	public String addNewNinja(Model model, @ModelAttribute("ninjas") Ninja ninjas) {
//		List<Ninja> allObj = ninjaServ.allNinja();
//		model.addAttribute("all_ninja", allObj);
//		
////		or can write as a :
////		model.addAttribute("dojos", dojoService.allDojos());
//		
//		return "dashboard.jsp";
//	}
//
////--------------------------------------------------
//
//
//	@GetMapping("/addninja")
//	
//	
//	
//	
//	@GetMapping("/dojo/{dojo_id}")
//	public String showDojo(@PathVariable("dojo_id") Long dojo_id, Model model) {
//		Dojo dojo = dojoService.findDojo(dojo_id);
//		model.addAttribute("dojo", dojo);
//		return "dojo.jsp";
//	}
//
//	@GetMapping("/dojo/addnew")
//	public String addNewDojo(@Valid @ModelAttribute("dojo") Dojo dojo) {
//		return "newDojo.jsp";
//	}
//
//	@PostMapping("/dojo/new")
//	public String addDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
//		if (result.hasErrors()) {  
//			return "redirect:/dojo/addnew";
//		} else {
//			Dojo newDojo = dojoService.create(dojo);
//			return "redirect:/dojo/" + newDojo.getId();
//		}
//
//	}
//
//	
//	
//	@PostMapping("/ninja/new")
//	public String addNinja(@Valid @ModelAttribute("ninjas") Ninja ninja, BindingResult result) {
//		if (result.hasErrors()) {
//			return "redirect:/ninja/addnew";
//		} else {
//			Ninja newNinja = ninjaService.createNinja(ninja);
//			return "redirect:/dojo/" + newNinja.getDojo().getId();
//		}
//	}
//	
////--------------------------------------------------
//
//}

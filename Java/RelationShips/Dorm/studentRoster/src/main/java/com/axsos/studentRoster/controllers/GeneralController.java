package com.axsos.studentRoster.controllers;

import com.axsos.studentRoster.models.Dorm;
import com.axsos.studentRoster.models.Student;

//import com.axsos.ninjaPlus.services.dojoService;
//import com.axsos.ninjaPlus.services.ninjaService;

import com.axsos.studentRoster.services.generalService;

import java.util.List;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

//import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GeneralController {

	@Autowired
	private final generalService generalservice;

	public GeneralController(generalService generalservice) {
		super();
		this.generalservice = generalservice;
	}

	// --------------------------------------------------
	@GetMapping("/")
	public String redirectToDorm() {
		return "redirect:/dorms/new";
	}

	@GetMapping("/dorms/new")
	public String Dorm(@ModelAttribute("dorm") Dorm dorm) {
		return "NewDorm.jsp";
	}

	@PostMapping("/newdorm")
	public String addDorm(@Valid @ModelAttribute("dorm") Dorm dorm, BindingResult result) {
		if (result.hasErrors()) {
			return "Dorms.jsp";
		} else {
			generalservice.createDorm(dorm);
			return "redirect:/";
		}
	}

	@GetMapping("/dorms")
	public String dorms(Model model, @ModelAttribute("all_dorm") Dorm dorm) {
		model.addAttribute("all_dorm", generalservice.allDorm());
		return "Dorms.jsp";
	}

	// --------------------------------------------------

	// because there select so should used a Model model beacuse there data in jsp
	@GetMapping("/students/new")
	public String student(Model model, @ModelAttribute("students") Student student) {
		model.addAttribute("all_dorm", generalservice.allDorm());
		return "NewStudent.jsp";
	}

	@PostMapping("/addstudent")
	public String addStudent(Model model, @Valid @ModelAttribute("students") Student student, BindingResult result) {
		if (result.hasErrors()) {
			model.addAttribute("all_dorm", generalservice.allDorm());
			return "Dorms.jsp";
		} else {
			generalservice.createStudent(student);
			return "redirect:/students/new";
		}
	}
	// --------------------------------------------------

	@GetMapping("/dorms/remove/{id}/{dorm_id}")
	public String destroyLink(@PathVariable("id") Long id) {
		generalservice.deleteStudent(id);
		return "redirect:/dorms/{dorm_id}";
	}

	// --------------------------------------------------

	// because there select so should used a Model model beacuse there data in jsp
	@GetMapping("/dorms/{dorm_id}")
	public String Wingstudent(Model model, @ModelAttribute("studtentToDorm") Student student,
			@PathVariable("dorm_id") Long dorm_id) {

		model.addAttribute("dorm", generalservice.findDorm(dorm_id));
		model.addAttribute("all_student", generalservice.allStudent());
		model.addAttribute("all_dorm", generalservice.allDorm());
		model.addAttribute("dormStudents", generalservice.findDorm(dorm_id).getStudents());
		return "WingStudent.jsp";
	}

	@PostMapping("/dorms/addstudent/{dorm_id}")
	public String addStudentToDorm(Model model, @Valid @ModelAttribute("studtentToDorm") Student student,
			BindingResult result, @RequestParam("student_id") Long student_id,@PathVariable("dorm_id") Long dorm_id) {
		
		if (result.hasErrors()) {
			model.addAttribute("dorm", generalservice.findDorm(dorm_id));
			model.addAttribute("all_student", generalservice.allStudent());
			model.addAttribute("all_dorm", generalservice.allDorm());
			model.addAttribute("dormStudents", generalservice.findDorm(dorm_id).getStudents());
			return "WingStudent.jsp";
		} else {
			generalservice.createStudent(student);
			return "redirect:/students/new";
		}
	}

}

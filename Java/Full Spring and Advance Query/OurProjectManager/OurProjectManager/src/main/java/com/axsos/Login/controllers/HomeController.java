package com.axsos.Login.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.axsos.Login.models.LoginUser;
import com.axsos.Login.models.User;
import com.axsos.Login.services.UserService;

@Controller
public class HomeController {

	@Autowired
	private UserService userServ;

//	-------------renderPage-------------------

	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "login.jsp";
	}

//	-------------register-------------------
    @GetMapping("/home")
    public String home(Model model, HttpSession session) {
        if (session.getAttribute("user_id") != null) {
            Long user_id = (Long)session.getAttribute("user_id");
            User thisUser = userServ.findUserById(user_id);
            model.addAttribute("thisUser", thisUser);
            return "home.jsp";
        } else {
            return "redirect:/";
        }
    }

	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model,
			HttpSession session) {
		userServ.register(newUser, result);
		if (result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "login.jsp";
		}
		session.setAttribute("user_id", newUser.getId());
		return "redirect:/home";
	}

//	-------------login-------------------

	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model,
			HttpSession session) {
		User user = userServ.login(newLogin, result);
		if (result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "login.jsp";
		}
		session.setAttribute("user_id", user.getId());
	
		return "redirect:/home";
	}

//	-------------logout-------------------
	
	@GetMapping("/logout")
	public String dashboard(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
}

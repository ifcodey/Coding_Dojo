package com.dolah.project_manager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;

import com.dolah.project_manager.service.userService;
import com.dolah.project_manager.service.projectService;

import com.dolah.project_manager.models.LoginUser;
import com.dolah.project_manager.models.User;


@Controller
public class Gcontroller {


    @Autowired
    private userService userServ;
    @Autowired
    private projectService projectServ;

//	-------------renderPage-------------------

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "log.jsp";
    }


    @GetMapping("/register")
    public String run_register(Model model) {
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "reg.jsp";
    }

    @GetMapping("/login")
    public String run_login(Model model) {
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "log.jsp";
    }

    //	-------------register-------------------

    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model,
                           HttpSession session) {
        userServ.register(newUser, result);
        if (result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "reg.jsp";
        }
        session.setAttribute("user_id", newUser.getId());
        return "redirect:/login";
    }

//	-------------login-------------------

    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model,
                        HttpSession session) {
        User user = userServ.login(newLogin, result);
        if (result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "log.jsp";
        }
        session.setAttribute("user_id", user.getId());

        return "redirect:/dash";
    }

//	-------------logout-------------------

    @GetMapping("/logout")
    public String dashboard(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

}

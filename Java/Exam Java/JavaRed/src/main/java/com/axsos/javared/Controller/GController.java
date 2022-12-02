package com.axsos.javared.Controller;


import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.axsos.javared.service.tripService;
import com.axsos.javared.service.userService;

import com.axsos.javared.models.LoginUser;
import com.axsos.javared.models.User;
import com.axsos.javared.models.Trip;

@Controller
public class GController {


    @Autowired
    private userService userServ;

    @Autowired
    private tripService tripServ;
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

    //	-------------show Teams-------------------

    @GetMapping(value = {"/trip", "/dash"})
    public String dashPage(HttpSession session, Model model) {
        if (session.getAttribute("user_id") != null) {

            Long user_id = (Long) session.getAttribute("user_id");
            User thisUser = userServ.findUserById(user_id);

            model.addAttribute("user_id", user_id);
            model.addAttribute("thisUser", thisUser);

            model.addAttribute("all_trip", tripServ.allTrip());


            return "dash.jsp";
        } else {
            return "redirect:/";
        }
    }

    @PostMapping("/trip/join/{id}")
    public String joinTrip(HttpSession session, Model model) {

        return "";
    }

    //	-------------add new Team-------------------

    @GetMapping(value = {"/trip/new", "/trip/add"})
    public String runAddPage(Model model, HttpSession session, @ModelAttribute("trip") Trip trip) {
        if (session.getAttribute("user_id") != null) {
            Long thisUser = (Long) session.getAttribute("user_id");
            model.addAttribute("thisUser", thisUser);

            return "adding.jsp";
        } else {
            return "redirect:/dash";
        }
    }

    @PostMapping(value = {"/trip/new", "/trip/add"})
    public String addTeam(@Valid @ModelAttribute("trip") Trip trip, BindingResult result, HttpSession session) {
        Long user_id = (Long) session.getAttribute("user_id");
        User thisUser = userServ.findUserById(user_id);

        if (result.hasErrors()) {
            return "adding.jsp";
        } else {
            trip.setUser(thisUser);
            tripServ.createTrip(trip);
            return "redirect:/dash";
        }
    }

    //	-------------update Team-------------------

    @GetMapping(value = {"/trip/edit/{id}", "trip/update/{id}"})
    public String runUpdatePage(Model model, HttpSession session, @PathVariable("id") Long id, @ModelAttribute("trip") Trip trip) {
        if (session.getAttribute("user_id") != null) {
            Long thisUser = (Long) session.getAttribute("user_id");
            model.addAttribute("thisUser", thisUser);

            model.addAttribute("currentTrip", tripServ.findOneTrip(id));

            return "updating.jsp";
        } else {
            return "redirect:/dash";
        }
    }

    @PutMapping(value = {"/trip/edit/{id}", "trip/update/{id}"})
    public String updateTeam(@Valid @ModelAttribute("trip") Trip trip, BindingResult result, HttpSession session, @PathVariable("id") Long id) {
        if (result.hasErrors()) {
            return "updating.jsp";

        } else {

            Long user_id = (Long) session.getAttribute("user_id");
            User thisUser = userServ.findUserById(user_id);

            trip.setUser(thisUser);
            tripServ.updateTrip(trip);
            return "redirect:/dash";

        }
    }

    // -------------Deletetrip-------------------

    @GetMapping("/delete/{id}")
    public String destroy(@PathVariable("id") Long id) {
        tripServ.deleteTrip(id);
        return "redirect:/dash";
    }

    //	-------------detail for one Team-------------------

    @GetMapping("/trip/{id}")
    public String oneTeam(Model model, HttpSession session, @PathVariable("id") Long id) {
        if (session.getAttribute("user_id") != null) {
            Long user_id = (Long) session.getAttribute("user_id");
            User thisUser = userServ.findUserById(user_id);

            model.addAttribute("user_id", user_id);
            model.addAttribute("thisUser", thisUser);

            Trip trip = tripServ.findOneTrip(id);
            model.addAttribute("assignedUsers", userServ.getAssignedtrips(trip));
            model.addAttribute("unassignedUsers", userServ.getUnassignedtrips(trip));

            model.addAttribute("single_trip", trip);
            return "detail.jsp";
        } else {
            return "redirect:/dash";
        }
    }

    //    -------------------- Unjoined--------------------

//    @RequestMapping("/join/return/{trip_id}")
//    public String returnBook(@PathVariable("trip_id") Long trip_id, HttpSession session) {
//
//        if (session.getAttribute("user_id") == null) {
//            return "redirect:/logout";
//        }
//        userServ.getAssignedtrips(tripServ.findOneTrip(trip_id));
//
//        return "redirect:/dash";
//    }
}


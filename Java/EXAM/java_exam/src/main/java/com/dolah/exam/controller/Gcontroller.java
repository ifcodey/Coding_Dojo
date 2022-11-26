package com.dolah.exam.controller;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.dolah.exam.service.TeamService;
import com.dolah.exam.service.userService;

import com.dolah.exam.models.LoginUser;
import com.dolah.exam.models.User;
import com.dolah.exam.models.Team;

@Controller
public class Gcontroller {


    @Autowired
    private userService userServ;

    @Autowired
    private TeamService teamServ;
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

    @GetMapping(value = {"/team", "/dash"})
    public String dashPage(HttpSession session, Model model) {
        if (session.getAttribute("user_id") != null) {

            Long user_id = (Long) session.getAttribute("user_id");
            User thisUser = userServ.findUserById(user_id);

            model.addAttribute("user_id", user_id);
            model.addAttribute("thisUser", thisUser);

            model.addAttribute("all_team", teamServ.allTeam());
            return "dash.jsp";
        } else {
            return "redirect:/";
        }
    }

    //	-------------add new Team-------------------

    @GetMapping(value = {"/team/new", "team/add"})
    public String runAddPage(Model model, HttpSession session, @ModelAttribute("team_form") Team team) {
        if (session.getAttribute("user_id") != null) {
            Long thisUser = (Long) session.getAttribute("user_id");
            model.addAttribute("thisUser", thisUser);
            return "adding.jsp";
        } else {
            return "redirect:/dash";
        }
    }

    @PostMapping(value = {"/team/new", "team/add"})
    public String addTeam(@Valid @ModelAttribute("team_form") Team team, BindingResult result, HttpSession session) {
        Long user_id = (Long) session.getAttribute("user_id");
        User thisUser = userServ.findUserById(user_id);

        if (result.hasErrors()) {
            return "adding.jsp";
        } else {
            team.setUser(thisUser);
            teamServ.createTeam(team);
            return "redirect:/dash";
        }
    }

    // -------------DeleteBook-------------------

    @DeleteMapping("/delete/{id}")
    public String destroy(@PathVariable("id") Long id) {
        teamServ.deleteTeam(id);
        return "redirect:/dash";
    }

    //	-------------detail for one Team-------------------

    @GetMapping("/team/{id}")
    public String oneTeam(Model model, HttpSession session, @PathVariable("id") Long id) {
        if (session.getAttribute("user_id") != null) {
            Long user_id = (Long) session.getAttribute("user_id");
            User thisUser = userServ.findUserById(user_id);

            model.addAttribute("user_id", user_id);
            model.addAttribute("thisUser", thisUser);

            Team team = teamServ.findOneTeam(id);
            model.addAttribute("single_team", team);

            model.addAttribute("assignedUsers", userServ.getAssignedteams(team));
            model.addAttribute("unassignedUsers", userServ.getUnassignedteams(team));

            return "detail.jsp";
        } else {
            return "redirect:/dash";
        }
    }

    @PostMapping("/team/{id}")
    public String addPlayer(Model model, HttpSession session, @PathVariable("id") Long id, @RequestParam(value = "userId") Long userId) {

        User player = userServ.findUserById(userId);
        Team team = teamServ.findOneTeam(id);

        team.getPlayers().add(player);
        teamServ.createTeam(team);

        model.addAttribute("assignedUsers", userServ.getAssignedteams(team));
        model.addAttribute("unassignedUsers", userServ.getUnassignedteams(team));
        return "redirect:/team/" + id;

    }

    //	-------------update Team-------------------

    @GetMapping(value = {"/team/edit/{id}", "team/update/{id}"})
    public String runUpdatePage(Model model, HttpSession session, @PathVariable("id") Long id, @ModelAttribute("team_update") Team team) {
        if (session.getAttribute("user_id") != null) {
            Long thisUser = (Long) session.getAttribute("user_id");
            model.addAttribute("thisUser", thisUser);

            model.addAttribute("currentTeam", teamServ.findOneTeam(id));

            return "updating.jsp";
        } else {
            return "redirect:/dash";
        }
    }

    @PutMapping(value = {"/team/edit/{id}", "team/update/{id}"})
    public String updateTeam(@Valid @ModelAttribute("team_update") Team team, BindingResult result, HttpSession session, @PathVariable("id") Long id) {
        if (result.hasErrors()) {
            return "updating.jsp";

        } else {

            Long user_id = (Long) session.getAttribute("user_id");
            User thisUser = userServ.findUserById(user_id);
            team.setUser(thisUser);

            if (team.getDay().equals("Monday") ||
                    team.getDay().equals("Tuesday") || team.getDay().equals("Wednesday") || team.getDay().equals("Thursday") || team.getDay().equals("Friday") || team.getDay().equals("Saturday") || team.getDay().equals("Sonday") || team.getDay().equals("Sunday") || team.getDay().equals("sunday") || team.getDay().equals("saturday") || team.getDay().equals("saturday") || team.getDay().equals("friday") || team.getDay().equals("thursday") || team.getDay().equals("wednesday") || team.getDay().equals("tuesday") || team.getDay().equals("monday")
            ) {
                if (team.getLevel().equals("1") || team.getLevel().equals("2") || team.getLevel().equals("3") || team.getLevel().equals("4") || team.getLevel().equals("5")) {
                    teamServ.updateTeam(team);
                } else {
                    return "redirect:/team/edit/{id}";
                }
            } else {
                return "redirect:/team/edit/{id}";
            }
            return "redirect:/dash";
        }
    }
}

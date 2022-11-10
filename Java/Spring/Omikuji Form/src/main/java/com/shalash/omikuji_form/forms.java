package com.shalash.omikuji_form;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import javax.servlet.http.HttpSession;


@Controller
public class forms {

    @RequestMapping("/")
    public String page_run() {
        return "forms.jsp";
    }

    @RequestMapping(value="/forms", method= RequestMethod.POST)
    public String index(@RequestParam(value = "num") int num,
                        @RequestParam(value = "city") String city,
                        @RequestParam(value = "person") String person,
                        @RequestParam(value = "hobby") String hobby,
                        @RequestParam(value = "living") String living,
                        @RequestParam(value = "note") String texarea,
                        HttpSession session, Model model , RedirectAttributes redirectAttributes) {

//        if (city.length() < 3 && person.length() < 3) {
//            //session.setAttribute("cityName" , city);
//            redirectAttributes.addFlashAttribute("error", "Enter a city or person length of name less than 3 character !");
//            return "redirect:/";
//        }
//
//        if (hobby.length() < 10 && living.length() < 20) {
//            redirectAttributes.addFlashAttribute("error", "Enter a hobby or living length => (10 , 20) character !");
//            return "redirect:/";
//
//        }
//        if (texarea.length() < 10) {
//            redirectAttributes.addFlashAttribute("error", "Enter a Note at least 10 character !");
//            return "redirect:/";
//        }

        session.setAttribute("num",num);
        session.setAttribute("city",city);
        session.setAttribute("person",person);
        session.setAttribute("hobby",hobby);
        session.setAttribute("living",living);
        session.setAttribute("note",texarea);
        return "redirect:/display";
    }
    @RequestMapping("/display")
    public String dispalys() {
        return "show.jsp";
    }
}
package com.example.time_display;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;
@Controller
public class Times {

    @RequestMapping("/")
    public String page(Model model) {
        return "page.jsp";
    }

    @RequestMapping("/date")
    public String date(Model model) {
        Date times = new Date();
        model.addAttribute("getdate", times.getTime());
        return "date.jsp";
    }

    @RequestMapping("/time")
    public String time(Model model) {
        Date times = new Date();
        model.addAttribute("gettime", times.toString());
        return "time.jsp";
    }
}

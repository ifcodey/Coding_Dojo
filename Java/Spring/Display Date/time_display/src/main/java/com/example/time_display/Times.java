package com.example.time_display;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.text.*;
import java.time.*;
import java.util.*;

@Controller
public class Times {

    @RequestMapping("/")
    public String page(Model model) {
        return "page.jsp";
    }

    @RequestMapping("/dates")
    public String date(Model model) {
//        Date times = new Date(128, 01, 22);
//        model.addAttribute("getdate", times.toString());


        SimpleDateFormat dayNameFormat = new SimpleDateFormat("EEEE");
        SimpleDateFormat dayFormat = new SimpleDateFormat("dd");
        SimpleDateFormat monthFormat = new SimpleDateFormat("MMMM");
        SimpleDateFormat yearFormat = new SimpleDateFormat("Y");

        Date times = new Date(128,0 , 22);

        String dayNameString = dayNameFormat.format(times);
        String dayString = dayFormat.format(times);
        String monthString = monthFormat.format(times);
        String yearString = yearFormat.format(times);

        String dateString = dayNameString + ", " + "the " + dayString + " of " + monthString + ", " + yearString;
        // for an extra challenge, try to add 'st', 'nd', 'rd', or 'th' based on the date
        // Example: Monday, the 3rd of March, 2023

        model.addAttribute("getdate", dateString);

        return "dates.jsp";
    }

    @RequestMapping("/times")
    public String time(Model model) {
//        Date times = new Date();
//        model.addAttribute("gettime", times.toString());


        SimpleDateFormat dayNameFormat = new SimpleDateFormat("EEEE");
        SimpleDateFormat dayFormat = new SimpleDateFormat("dd");

        Date times = new Date(1,1,1,11,30);

        String dayNameString = dayNameFormat.format(times);
        String dayString = dayFormat.format(times);

        String dateString = dayNameString + ", " + "the " + dayString ;
        // for an extra challenge, try to add 'st', 'nd', 'rd', or 'th' based on the date
        // Example: Monday, the 3rd of March, 2023

        model.addAttribute("getdate", dateString);

        return "time.jsp";
    }
}

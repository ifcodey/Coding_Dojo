package com.example.counter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpSession;

@SpringBootApplication
@Controller
public class counter {

    @RequestMapping("/")
    public String Count(HttpSession session , Model model){


        Integer currentCount = (Integer) session.getAttribute("count");
        int x = currentCount + 1;
        model.addAttribute("countToShow", currentCount);
        session.setAttribute("counts",x);
        // session
        return "counter.jsp";
    }

    @RequestMapping("/your_server")
    public String Msg(){
        return "msg.jsp";
    }
}


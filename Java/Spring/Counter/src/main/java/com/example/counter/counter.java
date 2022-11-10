package com.example.counter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;


@Controller
public class counter {

    @RequestMapping("/")
    public String Count(HttpSession session, Model model) {

        if (session.getAttribute("counts") == null) {

            //session
            session.setAttribute("counts", 1);

            //model saver
            Integer currentCount = (Integer) session.getAttribute("counts");
            model.addAttribute("countToShow", currentCount);

        } else {

            //session
            int counts = (int) session.getAttribute("counts");
            counts++;
            session.setAttribute("counts", counts);

            //model saver
            Integer currentCount = (Integer) session.getAttribute("counts");
            model.addAttribute("countToShow", currentCount);
        }


        // session
        return "counter.jsp";
    }

    @RequestMapping("/your_server")
    public String Msg() {
        return "msg.jsp";
    }
}


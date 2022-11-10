package com.example.fruityloops;

import org.springframework.stereotype.*;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.lang.*;


@Controller
public class ItemController {
    // ... imports (Use shift+ctrl+O or shift+cmd+O to import as you code)

        @RequestMapping("/")
        public String index(Model model) {

            ArrayList<Item> fruits = new ArrayList<Item>();

            //new Item("Kiwi", 1.5) -> this is a constructor.
            fruits.add(new Item("Kiwi", 1.5));
            fruits.add(new Item("Mango", 2.0));
            fruits.add(new Item("Goji Berries", 4.0));
            fruits.add(new Item("Guava", .75));

            model.addAttribute("fruits1", fruits);
            return "index.jsp";


    }


}

package com.ifcodey;

import java.util.Date;
import java.util.ArrayList;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.text.DateFormat;

@Controller
public class NinjaGold {
	
//	check if a session is null and give it a default value = 0.
	@RequestMapping("/")
	public String index(HttpSession session) {
		
//		define of array list to saving a session of box number or text print on it 
		ArrayList<String> containsArray = new ArrayList<String>();
		
		if (session.getAttribute("goldNumber") == null) {
			session.setAttribute("goldNumber", 0);
		}
		if (session.getAttribute("contains") == null) {
			session.setAttribute("contains", containsArray);
		}
		return "index.jsp";
	}

	
	@PostMapping("/processmoney")
	public String calcMoney(@RequestParam(value="whichForm") String process, HttpSession session, Model model) {
		int goldNumber = (int) session.getAttribute("goldNumber");
		
//		do casting convert for a contains session to array list for display it on a textarea.
		ArrayList<String> containsArray = (ArrayList<String>) session.getAttribute("contains");
		
		Random randNumber = new Random();
		
		Date date = new Date();
		String dateCreatedAt = DateFormat.getInstance().format(date);
		
		if(!process.equals("quest")) {
			int randMoney = randNumber.nextInt(10) + 10;
			System.out.println(randMoney);
			
//			counter for total goldNumber after add a old Gold.
			goldNumber += randMoney;
			
			containsArray.add(0,String.format("<p class='text text-success'>you Earned %d from %s (%s)</p>", randMoney,
					process, dateCreatedAt));
			
			session.setAttribute("goldNumber", goldNumber);
			session.setAttribute("contains", containsArray);
			
		}else {
			int luck = randNumber.nextInt(2);
			Integer randMoney = randNumber.nextInt(50);
			System.out.println(randMoney);
			if (luck == 1) {
				goldNumber += randMoney;
			} else {
				goldNumber -= randMoney;
			}
			containsArray.add(0, luck == 1
					? String.format("<p class='text text-success'>you Earned %d from Quest (%s) </p>", randMoney, dateCreatedAt)
					: String.format("<p class='text text-danger'>you lost -%d from Quest (%s) </p>", randMoney, dateCreatedAt));
			session.setAttribute("gold", goldNumber);
			session.setAttribute("contains", containsArray);
		}
		model.addAttribute("goldNumber", goldNumber);
		model.addAttribute("contains", containsArray);

		return "redirect:/";

	}
		
}

package com.axsos.daikichi_routes;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController

public class controller {

	@RequestMapping("/")
	public String fun() {
		return "Welcome!";
	}
	
	@RequestMapping("/daikichi")
	public String fun1() {
		return "Welcome!";
	}
	
	@RequestMapping("/daikichi/today")
	public String fun2() {
		return "Today you will find luck in all your endeavors!";
	}
	
	@RequestMapping("/daikichi/tomorrow")
	public String fun3() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	
}

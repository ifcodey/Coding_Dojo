package com.axsos.variable;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@RestController
public class Pather {
	
	@RequestMapping("daikichi/travel/honolulu")
	public String staticFun(){
   	return "Congratulations ! you will soon travel Honolulu";
	}
	
	@RequestMapping("daikichi/travel/{city}")
	public String staticFun(@PathVariable("city") String city){
   	return "Congratulations ! you will soon travel to "+  city;
	}

	@RequestMapping("daikichi/lotto/{number}")
	public String DynamicFun2(@PathVariable("number") int number){
		String str = "";
		if( number % 2 == 0) {
			str = "You will take a grand journey in the near future, but be weary of tempting offers" ;
		}
		else if(number % 2 != 0){
			str = "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends." ;
		}
		return str;
	}
}


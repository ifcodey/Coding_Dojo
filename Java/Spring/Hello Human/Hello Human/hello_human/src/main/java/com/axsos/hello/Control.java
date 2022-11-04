package com.axsos.hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Control {

	  @RequestMapping("/home")
	    public String index() {
	        return "Write a name query /?name = ";
	    }
	  @RequestMapping("/")
//	  public String index2(@RequestParam(value="name") String name ,@RequestParam(value="last") String last) {
//	        return "Hello : " + name + "" + last;
//	    }
	  
	  public String index2(@RequestParam(value="name") String name ,@RequestParam(value="last") String last,@RequestParam(value="time") int time) {
	        String str = "";
		  for(int x = 0 ; x < time ; x++) {
			  str += "Hello : " + name + "" + last;
		  }
		  return str;
	    }
}

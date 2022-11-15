package com.axsos.productsCategories.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.axsos.productsCategories.models.Category;
import com.axsos.productsCategories.models.Product;
import com.axsos.productsCategories.services.CategoryService;
import com.axsos.productsCategories.services.ProductService;

@Controller
public class generalController {

	@Autowired
	private CategoryService categoryservice;
	
	@Autowired
	private ProductService productservice;


// --------------------------------------------------

	@GetMapping("/")
	public String redirectToHome() {
		return "redirect:/home";
	}
	
	@GetMapping("/home")
	public String dojo(Model model ) {
		model.addAttribute("cats", categoryservice.allCategorys());
		model.addAttribute("prons", productservice.allProducts());
		
		return "home.jsp";
	}
//	-------------------------------------------
	@GetMapping("/cat/news")
	public String dojo(@ModelAttribute("category") Category category) {
		return "addCategory.jsp";
	}
	
	@PostMapping("/addcategory")
	public String addDojo(@Valid @ModelAttribute("category") Category category ,BindingResult result) {
		if(result.hasErrors()) {
			return "home.jsp";
		}else {
			categoryservice.addCategory(category);
			return "redirect:/";
		}
	}
//	-----------------------------------------------
	
	@GetMapping("/product/news")
	public String product(@ModelAttribute("product") Product product) {
		return "addProduct.jsp";
	}

	@PostMapping("/addproduct")
	public String addProduct(@Valid @ModelAttribute("product") Product product ,BindingResult result) {
		if(result.hasErrors()) {
			return "home.jsp";
		}else {
			productservice.addProduct(product);
			return "redirect:/";
		}
	}
//	-----------------------------------------------
	@GetMapping("/products/{id}")
	public String showproduct(@ModelAttribute("product") Product product,@PathVariable("id") Long id,Model model) {
		model.addAttribute("product_id", productservice.singleProduct(id));
		
		List<Category> cato = categoryservice.getUnassignedProducts(productservice.singleProduct(id));
		model.addAttribute("cato", cato);

		return "showProd.jsp";
	}
	
	
	@PostMapping("/products/{id}")
	public String addProductspecific(@Valid @ModelAttribute("product") Product product ,BindingResult result
			,@PathVariable("id") Long id,
			@RequestParam (value = "categoryId") Long categoryId ) {
		
		if(result.hasErrors()) {
			return "home.jsp";
		}else {
			Product prod = productservice.singleProduct(id);
			Category cats = categoryservice.singleCategory(categoryId);
			
			prod.getCategories().add(cats);
			productservice.saveProduct(prod);
			
			
			return "redirect:/";
		}
	}
	
//	-----------------------------------------------
	@GetMapping("/category/{id}")
	public String showcat(@ModelAttribute("category") Category category,@PathVariable("id") Long id,Model model) {
		model.addAttribute("category_id", categoryservice.singleCategory(id));
		
		List<Product> proder = productservice.getUnassignedCategories(categoryservice.singleCategory(id));
		model.addAttribute("proder", proder);

		return "showCat.jsp";
	}
	
	
	@PostMapping("/category/{id}")
	public String addcategorypecific(@Valid @ModelAttribute("product") Product product ,BindingResult result
			,@PathVariable("id") Long id,
			@RequestParam (value = "productId") Long productId ) {
		
		if(result.hasErrors()) {
			return "home.jsp";
		}else {
			Product prod = productservice.singleProduct(productId);
			Category cats = categoryservice.singleCategory(id);
			
			cats.getProducts().add(prod);
			categoryservice.saveCategory(cats);
			
			
			return "redirect:/";
		}
	}
	
	@DeleteMapping("/category/delete/{id}")
	public String deleteCategory(@PathVariable("id") Long id,Model model) {
		categoryservice.deleteCategory(id);
//		productservice.deleteProduct(id);
		return "redirect:/home";
	}
	
	@DeleteMapping("/product/delete/{id}")
	public String deleteProduct(@PathVariable("id") Long id,Model model) {
		productservice.deleteProduct(id);
//		categoryservice.deleteCategory(id);
		return "redirect:/home";
	}
}

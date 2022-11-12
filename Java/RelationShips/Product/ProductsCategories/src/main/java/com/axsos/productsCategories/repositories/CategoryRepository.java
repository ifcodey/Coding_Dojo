package com.axsos.productsCategories.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.productsCategories.models.Category;
import com.axsos.productsCategories.models.Product;

import java.util.*;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {
	List<Category> findAll();

	List<Category> findByProductsNotContains(Product product);

	List<Category> findAllByProducts(Product product);

}

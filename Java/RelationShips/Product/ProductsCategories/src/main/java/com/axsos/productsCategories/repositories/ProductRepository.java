package com.axsos.productsCategories.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.productsCategories.models.Category;
import com.axsos.productsCategories.models.Product;

import java.util.*;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

	List<Product> findAll();

	List<Product> findByCategoriesNotContains(Category category);

	List<Product> findAllByCategories(Category category);

}

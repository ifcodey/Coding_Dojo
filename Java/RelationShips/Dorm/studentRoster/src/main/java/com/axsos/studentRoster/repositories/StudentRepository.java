package com.axsos.studentRoster.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.studentRoster.models.Student;

import java.util.*;

@Repository
public interface StudentRepository extends CrudRepository<Student, Long> {

	List<Student> findAll();

	Optional <Student> findById(Long id);
}

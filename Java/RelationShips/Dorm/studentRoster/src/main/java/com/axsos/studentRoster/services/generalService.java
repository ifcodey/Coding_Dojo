package com.axsos.studentRoster.services;

import java.util.List;
import java.util.Optional;

//...
import org.springframework.stereotype.Service;

import com.axsos.studentRoster.models.Student;
import com.axsos.studentRoster.repositories.StudentRepository;

import com.axsos.studentRoster.models.Dorm;
import com.axsos.studentRoster.repositories.DormRepository;

@Service
public class generalService {

	private final StudentRepository studentRepository;
	private final DormRepository dormRepository;

	public generalService(DormRepository dormRepository, StudentRepository studentRepository) {
		super();
		this.dormRepository = dormRepository;
		this.studentRepository = studentRepository;
	}

	public Student createStudent(Student n) {
		return studentRepository.save(n);
	}

	public Dorm createDorm(Dorm n2) {
		return dormRepository.save(n2);
	}

	public List<Student> allStudent() {
		return studentRepository.findAll();
	}

	public List<Dorm> allDorm() {
		return dormRepository.findAll();
	}

//	SHORTCUT for find dojo
//	retrieves a dojo

	public Dorm findDorm(Long id) {
		return this.dormRepository.findById(id).orElse(null);
	}

	public Student findStudent(Long id) {
		return this.studentRepository.findById(id).orElse(null);
	}
	
	public void deleteDorm(Long id) {
		Optional<Dorm> obj = dormRepository.findById(id);
		if (obj.isPresent()) {
			dormRepository.deleteById(id);
		}
	}
	
	public void deleteStudent(Long id) {
		Optional<Student> obj = studentRepository.findById(id);
		if (obj.isPresent()) {
			studentRepository.deleteById(id);
		}
	}
	
	public void addToDorm(Student student, Dorm dorm) {
		student.setDorm(dorm);
		studentRepository.save(student);
	}
}

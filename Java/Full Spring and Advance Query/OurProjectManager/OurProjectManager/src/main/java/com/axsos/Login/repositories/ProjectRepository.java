package com.axsos.Login.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axsos.Login.models.Project;
import com.axsos.Login.models.User;

import java.util.Optional;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

	List<Project> findAll();

	List<Project> findAllByuserId(Long id);

	List<Project> findAllprojectsByUser(User user);

	List<Project> findByUserNotContains(User user);

	@Query(value = "SELECT projects.title,projects.due_date ,users.user_name FROM project.project_users join users on project_users.user_id = users.id join projects on project_users.project_id = projects.id where users.id= ?1", nativeQuery = true)
	List<Object[]> joinPojectsAndUsers(Long id);

	@Query(value = "SELECT * FROM project.project_users join users on project_users.user_id = users.id join projects on project_users.project_id = projects.id where  project_users.user_id = ?1", nativeQuery = true)
	List<Project> joinPojectsAndUsers2(User user);

	List<Project> findByusersNotContains(User user);
}

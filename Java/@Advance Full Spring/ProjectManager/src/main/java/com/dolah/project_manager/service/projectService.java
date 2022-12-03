package com.dolah.project_manager.service;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.dolah.project_manager.models.LoginUser;
import com.dolah.project_manager.models.Project;
import com.dolah.project_manager.models.Task;
import com.dolah.project_manager.models.User;

import com.dolah.project_manager.repository.ProjectRepo;
import com.dolah.project_manager.repository.TaskRepo;
import com.dolah.project_manager.repository.UserRepo;

@Service
public class projectService {


    @Autowired
    private ProjectRepo Project_Repo;
    @Autowired
    private TaskRepo Task_Repo;

    // ================================ Project Functionality =========================

    public Project findProject(Long id) {
        Optional<Project> book = Project_Repo.findById(id);
        if (book.isPresent()) {
            return book.get();
        } else {
            return null;
        }
    }

    public List<Project> findAll() {
        return Project_Repo.findAll();
    }

    public Project createProject(Project project) {
        return Project_Repo.save(project);
    }

    public void deleteProject(Long id) {
        Optional<Project> obj = Project_Repo.findById(id);
        if (obj.isPresent()) {
            Project_Repo.deleteById(id);
        }
    }

    public List<Project> allUsersInProject(Long id) {
        return Project_Repo.findAllByUserId(id);
    }

    public List<Project> allUsersNotInProject(User user) {
        return Project_Repo.findByusersNotContains(user);
    }

    // ================================ Task Functionality =========================

    public Task createTask(Task task) {
        return Task_Repo.save(task);
    }

    public List<Task> findAllTask() {
        return Task_Repo.findAll();
    }
}

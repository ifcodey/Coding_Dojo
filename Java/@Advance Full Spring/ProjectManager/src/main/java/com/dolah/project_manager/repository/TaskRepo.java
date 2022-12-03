package com.dolah.project_manager.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.dolah.project_manager.models.Task;

@Repository
public interface TaskRepo extends CrudRepository<Task, Long>{
    List<Task> findAll();

}

package com.todo.TaskManager.repository;
import com.todo.TaskManager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

    
}

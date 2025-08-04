package com.todo.TaskManager.service;
import com.todo.TaskManager.model.Task;
import java.util.List;
import java.util.Optional;
public interface TaskService {
    List<Task> getAllTasks();
    Optional<Task> getTaskById(Long id);
    Task createTask(Task task);
    Task updateTask(Long id, Task task);
    void deleteTask(Long id);
    Task markTaskAsComplete(Long id);
    
}

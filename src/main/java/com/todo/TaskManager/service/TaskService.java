package com.todo.TaskManager.service;

import com.todo.TaskManager.model.Task;

import java.util.List;

public interface TaskService {

    List<Task> getAllTasks();

    Task getTaskById(Long id);

    Task createTask(Task task);

    Task updateTask(Long id, Task task);

    void deleteTask(Long id);

    Task markTaskAsComplete(Long id);
}

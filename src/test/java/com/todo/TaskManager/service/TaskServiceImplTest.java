package com.todo.TaskManager.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Optional;

import com.todo.TaskManager.exception.TaskNotFoundException;
import com.todo.TaskManager.model.Task;
import com.todo.TaskManager.repository.TaskRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class TaskServiceImplTest {

    @Mock
    private TaskRepository taskRepository;

    private TaskServiceImpl taskService;

    @BeforeEach
    void setUp() {
        taskService = new TaskServiceImpl(taskRepository);
    }

    @Test
    void getTaskByIdReturnsTaskWhenPresent() {
        Task task = task("Prepare release", false);
        task.setId(1L);
        when(taskRepository.findById(1L)).thenReturn(Optional.of(task));

        Task result = taskService.getTaskById(1L);

        assertEquals("Prepare release", result.getTitle());
        verify(taskRepository).findById(1L);
    }

    @Test
    void getTaskByIdThrowsWhenMissing() {
        when(taskRepository.findById(99L)).thenReturn(Optional.empty());

        assertThrows(TaskNotFoundException.class, () -> taskService.getTaskById(99L));
    }

    @Test
    void markTaskAsCompletePersistsChange() {
        Task task = task("Write tests", false);
        task.setId(2L);
        when(taskRepository.findById(2L)).thenReturn(Optional.of(task));
        when(taskRepository.save(task)).thenReturn(task);

        Task result = taskService.markTaskAsComplete(2L);

        assertEquals(true, result.isCompleted());
        verify(taskRepository).save(task);
    }

    private Task task(String title, boolean completed) {
        Task task = new Task();
        task.setTitle(title);
        task.setDescription("Test task");
        task.setCompleted(completed);
        task.setDueDate(LocalDate.now().plusDays(1));
        task.setPriority("HIGH");
        return task;
    }
}

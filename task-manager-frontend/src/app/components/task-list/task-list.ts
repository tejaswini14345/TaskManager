import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = this.getEmptyTask();
  editingTask: Task | null = null;
  showForm = false;
  loading = false;
  error: string | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  getEmptyTask(): Task {
    return {
      title: '',
      description: '',
      completed: false,
      dueDate: '',
      priority: 'Low',
    };
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.newTask = this.getEmptyTask();
      this.editingTask = null;
    }
  }

  loadTasks(): void {
    this.loading = true;
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load tasks.';
        this.loading = false;
      }
    });
  }

  submitForm(): void {
    if (this.editingTask) {
      this.updateTask();
    } else {
      this.createTask();
    }
  }

  createTask(): void {
    this.taskService.createTask(this.newTask).subscribe({
      next: (createdTask) => {
        this.tasks.push(createdTask);
        this.newTask = this.getEmptyTask();
        this.showForm = false;
        this.error = null;
      },
      error: () => {
        this.error = 'Failed to create task.';
      }
    });
  }

  updateTask(): void {
    if (!this.editingTask?.id) return;

    this.taskService.updateTask(this.editingTask.id, this.newTask).subscribe({
      next: (updatedTask) => {
        const index = this.tasks.findIndex((t) => t.id === updatedTask.id);
        if (index !== -1) {
          this.tasks[index] = updatedTask;
        }
        this.cancelEdit();
        this.error = null;
      },
      error: () => {
        this.error = 'Failed to update task.';
      }
    });
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((t) => t.id !== taskId);
      },
      error: () => {
        this.error = 'Failed to delete task.';
      }
    });
  }

  toggleComplete(task: Task): void {
    const updatedTask = { ...task, completed: !task.completed };
    this.taskService.updateTask(task.id!, updatedTask).subscribe({
      next: (updated) => {
        const index = this.tasks.findIndex((t) => t.id === updated.id);
        if (index !== -1) this.tasks[index] = updated;
      },
      error: () => {
        this.error = 'Failed to update task status.';
      }
    });
  }

  editTask(task: Task): void {
    this.editingTask = { ...task };
    this.newTask = { ...task };
    this.showForm = true;
  }

  cancelEdit(): void {
    this.editingTask = null;
    this.newTask = this.getEmptyTask();
    this.showForm = false;
  }
}

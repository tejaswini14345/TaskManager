import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

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

  constructor(private readonly taskService: TaskService) {}

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
      this.resetForm();
    }
  }

  loadTasks(): void {
    this.loading = true;
    this.error = null;

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
      return;
    }

    this.createTask();
  }

  createTask(): void {
    this.taskService.createTask(this.newTask).subscribe({
      next: (createdTask) => {
        this.tasks = [...this.tasks, createdTask];
        this.resetForm();
        this.error = null;
      },
      error: () => {
        this.error = 'Failed to create task.';
      }
    });
  }

  updateTask(): void {
    if (!this.editingTask?.id) {
      return;
    }

    this.taskService.updateTask(this.editingTask.id, this.newTask).subscribe({
      next: (updatedTask) => {
        this.replaceTask(updatedTask);
        this.resetForm();
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
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      },
      error: () => {
        this.error = 'Failed to delete task.';
      }
    });
  }

  toggleComplete(task: Task): void {
    if (!task.id) {
      return;
    }

    if (task.completed) {
      this.taskService.updateTask(task.id, { ...task, completed: false }).subscribe({
        next: (updatedTask) => this.replaceTask(updatedTask),
        error: () => {
          this.error = 'Failed to update task status.';
        }
      });
      return;
    }

    this.taskService.completeTask(task.id).subscribe({
      next: (updatedTask) => this.replaceTask(updatedTask),
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
    this.resetForm();
  }

  private replaceTask(updatedTask: Task): void {
    this.tasks = this.tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
  }

  private resetForm(): void {
    this.editingTask = null;
    this.newTask = this.getEmptyTask();
    this.showForm = false;
  }
}

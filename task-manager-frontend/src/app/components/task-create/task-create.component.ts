import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  task: Task = {
    title: '',
    description: '',
    completed: false,
    dueDate: '',
    priority: ''
  };

  submitting = false;
  error: string | null = null;

  constructor(
    private readonly taskService: TaskService,
    private readonly router: Router
  ) {}

  onSubmit(): void {
    if (this.submitting) {
      return;
    }

    this.submitting = true;
    this.error = null;

    this.taskService.createTask(this.task).subscribe({
      next: () => {
        this.router.navigate(['/tasks']);
      },
      error: () => {
        this.error = 'Unable to create the task. Please review the form and try again.';
        this.submitting = false;
      }
    });
  }
}

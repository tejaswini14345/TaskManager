import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TaskService } from 'app/services/task.service';
import { Task } from 'app/models/task.model';

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

  constructor(private taskService: TaskService, private router: Router) {}

  onSubmit(): void {
    this.taskService.createTask(this.task).subscribe(() => {
      alert('Task created successfully!');
      this.router.navigate(['/tasks']);
    });
  }
}

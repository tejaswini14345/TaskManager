import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: Task | null = null;
  error: string | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTaskById(id).subscribe({
      next: (task) => {
        this.task = task;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching task', err);
        this.error = 'Could not load task.';
        this.loading = false;
      }
    });
  }
}

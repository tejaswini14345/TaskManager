import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./components/task-list/task-list').then(m => m.TaskListComponent),
  },
  {
    path: 'tasks/:id',
    loadComponent: () =>
      import('./components/task-detail/task-detail.component').then(m => m.TaskDetailComponent),
  },
  {
    path: 'tasks/create',
    loadComponent: () =>
      import('./components/task-create/task-create.component').then(m => m.TaskCreateComponent),
  }
];

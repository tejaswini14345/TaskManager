import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskCreateComponent } from './task-create.component';
import { TaskService } from 'app/services/task.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('TaskCreateComponent', () => {
  let component: TaskCreateComponent;
  let fixture: ComponentFixture<TaskCreateComponent>;
  let taskServiceSpy: jasmine.SpyObj<TaskService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    taskServiceSpy = jasmine.createSpyObj('TaskService', ['createTask']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [TaskCreateComponent],
      providers: [
        { provide: TaskService, useValue: taskServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call createTask and navigate on form submission', () => {
    const mockTask = {
      title: 'Test Task',
      description: 'Test Description',
      dueDate: '2025-08-01',
      completed: false,
      priority: 'Medium'
    };
    component.task = mockTask;
    taskServiceSpy.createTask.and.returnValue(
  of({
    id: 1,
    title: 'Test Task',
    description: 'Test Description',
    completed: false,
    dueDate: '2025-08-01',
    priority: 'High'
  })
);

    component.onSubmit();

    expect(taskServiceSpy.createTask).toHaveBeenCalledWith(mockTask);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/tasks']);
  });
});

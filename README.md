**# TaskManager**
This is a Task Manager web app I built using Spring Boot (Java) for the backend and Angular for the frontend. It’s a simple app where you can create tasks, view a list of tasks, and check details of a task.  The backend handles APIs and database operations, while the frontend gives a clean UI to interact with tasks.
Tech Stack I Used
**Backend (Java):**

Spring Boot, Spring Data JPA, SQL Server

**Frontend (Angular):**
Angular 16+, TypeScript, HTML, CSS


I have created one REST API using Spring Boot starting with the spring intializer to setup the project.
I choose Maven as a build Tool,Java as a language, and selected SpringBoot version 3.2.3.. In the project setup , I included essential metadata like Group,Artifact, Package Name, Description , and set the packaging to the JAR files.The dependencies I added were Spring Web, Spring Data JPA, Spring security, Spring Boot Actuator, Spring Cloud and  Spring Batch.After generating and downloading the project files,I extracted the ZIP files and opened it in my IDE.
To configure the database, I updated the application.properties file with the necessary details, including the database URL, Username, Password, and Hibernate dialect. I then organized the project structure by creating packages for domain entities, repositories, service and controllers. For the domain layer, I defined entity classes that map to database 
table using JPA annotations like @Entity, @Table, @Id, and @GeneratedValue. I also included relationships between entities using @One to Many and @Many to One. 
In the repository layer, I created interface extending JPA Repository to handle CRUD operations, using annotations such as @Repository and @EnableJPA Repositories. The service layer contained the business logic, implemented in service classes annotated with @Service, and dependencies were injected using @Autowired. The Controller layer 
managed the API endpoints, defined in classes annotated with @RestController and @RequestMapping , with specific HTTP methods mapped using @GetMapping, @PostMapping, @PutMapping, and @Delete Mapping. 
 I used @ControllerAdvice and @ExceptionHandler to define global handlers for di erent types of exceptions. To secure 
 API endpoints, I implemented Spring Security with OAuth2 Client Credentials Workflow and JWT Authentication.

How the Project is Organized
This project has two main parts:
**Backend (Spring Boot):**
Handles API requests.
Saves data into the database.
Contains models, services, repositories, and controllers.

**Frontend (Angular):**
Has components like Task Create, Task List, and Task Detail.
Calls backend APIs using services.
Displays data in a nice UI.
**
My Folder Structure :-**
TASKMANAGER/
├── Backend Code (Spring Boot)
│   ├── model/         --> Task.java (Represents Task data)
│   ├── repository/    --> TaskRepository (Database Access)
│   ├── service/       --> TaskService (Business Logic)
│   └── controller/    --> TaskController (API Endpoints)
│
├── Frontend Code (Angular)
│   ├── components/
│   │   ├── task-create/
│   │   ├── task-list/
│   │   └── task-detail/
│   ├── services/      --> task.service.ts (Calls Backend APIs)
│   ├── models/        --> task.model.ts (Task Structure)
│   └── main app files (app.component.ts, app.routes.ts, etc.)



**How to Run This Project?**
1. Backend (Spring Boot):
we need to right click on the TaskManagerApplication.java and click Run as Java
And we aslo need to make sure the Backend is Running
The Backend port we are using 8081

2.Frontend (Angular):
Go to the task-manager-frontend folder.
Go to the folder inside the front end folder named as cd Task-Manger-Frontend
and then ng serve
Our application will ne running on :- http://localhost:4200

**What Can This App Do?**
Add a new task with title and description.
View a list of all tasks.
Click on a task to view detailed info.
Simple and clean UI using Angular components.

<img width="1919" height="1031" alt="image" src="https://github.com/user-attachments/assets/1a10a3f3-8539-429c-b7d1-9919a413edc0" />

<img width="1918" height="1031" alt="image" src="https://github.com/user-attachments/assets/7efd0c3f-79fd-4fbb-a80f-615e82625aa9" />
Creating a Task

<img width="1910" height="1032" alt="image" src="https://github.com/user-attachments/assets/a32d84b1-3062-43bc-9469-c5239317ab4a" />
Updating a Task

<img width="1300" height="733" alt="image" src="https://github.com/user-attachments/assets/f24af43b-f56b-425f-934e-ce0af45e0abe" />
Database Table looks like


**Why I Made This?**
I built this project to learn full-stack development using Spring Boot and Angular. This helped me understand how frontend and backend connect using REST APIs, and how to structure code cleanly.




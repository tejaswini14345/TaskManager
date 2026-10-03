# Task Manager

A full-stack task management application built with **Java, Spring Boot, Angular, and SQL Server**. The project demonstrates a clean frontend-to-backend workflow using REST APIs, Spring Data JPA, and a layered backend architecture.

## Features

- Create, view, update, and delete tasks
- Mark tasks as complete
- View individual task details
- Angular frontend connected to a Spring Boot REST API
- SQL Server persistence with Spring Data JPA
- Backend request logging
- CORS configuration for local Angular development

## Tech Stack

### Backend
- Java 17
- Spring Boot 3.5.3
- Spring Web
- Spring Data JPA
- Maven
- Lombok
- SQL Server

### Frontend
- Angular
- TypeScript
- HTML
- CSS

## Architecture

```text
Angular UI
    |
    | HTTP / REST
    v
Spring Boot Controller
    |
    v
Service Layer
    |
    v
Repository Layer (Spring Data JPA)
    |
    v
SQL Server
```

The repository contains both the Spring Boot backend and the Angular frontend:

```text
TaskManager/
├── src/                       # Spring Boot backend
│   └── main/java/.../
│       ├── controller/
│       ├── model/
│       ├── repository/
│       └── service/
├── task-manager-frontend/     # Angular frontend
├── pom.xml
└── README.md
```

## REST API

Base URL: `http://localhost:8081/api/tasks`

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/{id}` | Get a task by ID |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/{id}` | Update a task |
| DELETE | `/api/tasks/{id}` | Delete a task |
| PATCH | `/api/tasks/{id}/complete` | Mark a task as complete |

## Running the Project

### Prerequisites

- Java 17
- Node.js / npm
- Angular CLI
- SQL Server

The current backend configuration expects a local SQL Server instance on port `1433`, database name `TaskManager`, and Windows integrated authentication. Update `src/main/resources/application.properties` if your environment uses different credentials or authentication.

### Start the backend

From the repository root:

```bash
./mvnw spring-boot:run
```

On Windows:

```powershell
mvnw.cmd spring-boot:run
```

The backend runs on:

```text
http://localhost:8081
```

### Start the frontend

```bash
cd task-manager-frontend
npm install
ng serve
```

Then open:

```text
http://localhost:4200
```

## Screenshots

### Task List

<img width="1919" height="1031" alt="Task list" src="https://github.com/user-attachments/assets/1a10a3f3-8539-429c-b7d1-9919a413edc0" />

### Create Task

<img width="1918" height="1031" alt="Create task" src="https://github.com/user-attachments/assets/7efd0c3f-79fd-4fbb-a80f-615e82625aa9" />

### Update Task

<img width="1910" height="1032" alt="Update task" src="https://github.com/user-attachments/assets/a32d84b1-3062-43bc-9469-c5239317ab4a" />

### SQL Server Data

<img width="1300" height="733" alt="SQL Server task table" src="https://github.com/user-attachments/assets/f24af43b-f56b-425f-934e-ce0af45e0abe" />

## What This Project Demonstrates

This project demonstrates practical full-stack development with a Java/Spring backend and Angular frontend, including REST API design, CRUD operations, persistence with JPA, SQL Server integration, and separation of controller, service, and repository responsibilities.

## Future Improvements

- Add DTOs and request validation
- Add centralized exception handling
- Add automated API and service tests
- Add authentication and authorization
- Containerize the application with Docker
- Add CI/CD with GitHub Actions

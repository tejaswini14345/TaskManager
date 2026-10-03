# Task Manager

A full-stack task management application built with **Java 17, Spring Boot, Angular, and SQL Server**.

The project now includes request validation, centralized API error handling, backend and frontend CI, unit tests, and Docker support for the Spring Boot backend.

## Features

- Create, view, update, and delete tasks
- Mark tasks as complete
- View individual task details
- Angular frontend connected to a Spring Boot REST API
- SQL Server persistence with Spring Data JPA
- Request validation and structured 400/404 responses
- Backend service unit tests
- GitHub Actions for backend tests and Angular builds

## Tech Stack

### Backend
- Java 17
- Spring Boot 3.5.3
- Spring Web
- Spring Data JPA
- Bean Validation
- SQL Server
- Maven
- JUnit 5 / Mockito

### Frontend
- Angular 20
- TypeScript
- HTML / CSS
- Angular HttpClient

### DevOps
- Docker
- GitHub Actions

## Architecture

```text
Angular UI
    |
    | REST
    v
Spring Boot Controller
    |
    v
Service Layer
    |
    v
Spring Data JPA Repository
    |
    v
SQL Server
```

## REST API

Base URL: `http://localhost:8081/api/tasks`

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/{id}` | Get a task |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/{id}` | Update a task |
| DELETE | `/api/tasks/{id}` | Delete a task |
| PATCH | `/api/tasks/{id}/complete` | Mark a task complete |

## Local Setup

### Backend

The current development configuration expects SQL Server on port `1433`, database `TaskManager`, using Windows integrated authentication. Update `application.properties` for your environment.

```bash
chmod +x mvnw
./mvnw spring-boot:run
```

Backend: `http://localhost:8081`

### Frontend

```bash
cd task-manager-frontend
npm ci
npm start
```

Frontend: `http://localhost:4200`

## Tests

Backend unit/context tests use an isolated H2 test database so CI does not depend on a local SQL Server instance.

```bash
chmod +x mvnw
./mvnw test
```

Frontend production build:

```bash
cd task-manager-frontend
npm ci
npm run build
```

## Docker

Build the backend image:

```bash
docker build -t task-manager-backend .
```

## Notable Improvements

- Constructor injection instead of field injection
- Explicit not-found exceptions instead of returning null
- Bean Validation on incoming task data
- Correct REST status codes for create/delete operations
- Dedicated PATCH endpoint for task completion
- Fixed Angular route ordering so `/tasks/create` is not interpreted as a task ID
- Shared frontend Task model instead of duplicate interfaces
- Backend and frontend GitHub Actions workflows

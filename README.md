# Kanban SPA – Group Project
### Project Description

This project is a Single Page Application (SPA) developed using React that implements a Kanban-based task management system. The application allows users to organize tasks visually across different workflow stages using the Kanban methodology.

The project was developed as a group assignment to practice SPA development, task management using Kanban, and collaborative work with GitHub

#### Project Objectives

Develop a functional Single Page Application

Apply the Kanban methodology during development

Enable task creation and management

Implement drag-and-drop task movement

Ensure data persistence using browser storage

Maintain an active Kanban board throughout the project

### Technologies Used

HTML5

CSS3

JavaScript (ES6+)

React

Vite

Git & GitHub

GitHub Projects (Kanban Board)

### Application Features

Three Kanban columns: To Do, In Progress, Done

Task cards displayed inside columns

Drag & drop functionality for moving tasks between columns

Persistent task storage using localStorage

Responsive and user-friendly interface

Single Page Application architecture
### Key Components
 ### App.jsx

Root component of the SPA.

Responsible for displaying the application title and rendering the Board component.

Main responsibility: Application entry UI.

### Board.jsx

This component is the core state manager of the application.

Responsibilities:

Stores tasks in three columns (To Do, In Progress, Done)

Controls task creation, editing, deletion, undo deletion

Handles task movement between columns

Saves and restores tasks using localStorage

### Column.jsx

Represents each Kanban column.

Responsibilities:

Displays column title and task counter

Shows input field for adding tasks

Displays tasks as Card components

Shows “No tasks yet” when empty

Supports task dropping for drag-and-drop

### Card.jsx

Represents an individual task card.

Responsibilities:

Displays task text

Provides edit and delete actions

Supports drag events for moving tasks

Includes edit mode with Save/Cancel buttons

Adds visual styling during dragging

# Project Structure
kanban-spa/
├── src/
│   ├── components/
│   │   ├── Board.jsx
│   │   ├── Column.jsx
│   │   └── Card.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── README.md

### localStorage Flow
On app load: application checks localStorage and loads saved data.
On every update: task state is stored automatically.
This ensures persistence after:
 refresh
 closing browser
reopening the application later

### 7. Installation and Running Instructions
7.1 Requirements

Node.js installed

npm available in terminal

7.2 Installation

Inside the project folder run:

npm install

7.3 Start Development Server
npm run dev

7.4 Open Application

Go to:

http://localhost:5173

8. Mobile Device Testing

The application supports mobile testing through network hosting:

npm run dev -- --host


Then open the Network URL on a real phone connected to the same Wi-Fi, such as:

http://192.168.1.5:5173


On mobile screens, the layout adapts and columns may stack vertically or use horizontal swipe depending on responsive settings.

# Testing

The application was tested using manual functional and mobile ddevice testing. Core features such as task creation, drag & drop functionality, and data persistence were verified to work correctly across multiple test scenarios.

# Kanban Methodology

The project development followed the Kanban methodology, using a GitHub Projects board with the following columns:

To Do

In Progress

Done

Tasks were moved across columns as development progressed, ensuring transparency and effective task management.

### Team Collaboration

The project was developed collaboratively using GitHub. All group members were added as collaborators to the repository and actively participated in development and task management.

# License

This project was developed for educational purposes as part of a university assignment.
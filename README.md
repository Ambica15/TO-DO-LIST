To-Do List Web App
Overview
This is a simple, front-end-only To-Do List web application built using Vanilla JavaScript, HTML, and CSS. It allows users to add tasks, mark them as complete, and remove them dynamically without page reloads. The app is designed to be lightweight, responsive, and user-friendly, with a clean interface.
Features

Add Tasks: Enter tasks via an input field and add them by clicking the "Add Task" button or pressing Enter.
Mark as Complete: Click a task to toggle its completion status, indicated by a strikethrough and gray background.
Remove Tasks: Delete tasks using the "Remove" button next to each task.
Responsive Design: Works on desktop and mobile devices with a centered, card-based layout.
Instant Updates: All actions update the UI dynamically using DOM manipulation.

Technologies

HTML: Structures the app with an input field, button, and task list.
CSS: Styles the app for a clean, modern look with flexbox for layout.
Vanilla JavaScript: Handles dynamic functionality like adding, completing, and removing tasks.

Setup Instructions

Clone or Download: Obtain the project files (index.html, styles.css, script.js).
Install live-server (optional, for development):
Install Node.js if not already installed.
Run npm install -g live-server in your terminal.


Run the App:
Place all files in the same directory.
Run live-server in the directory to start a local server (or open index.html directly in a browser).
Access the app at http://localhost:8080 in Chrome or any modern browser.


Test the App:
Enter a task (e.g., "Buy groceries") and click "Add Task" or press Enter.
Click a task to mark it as complete (strikethrough appears).
Click the "Remove" button to delete a task.



File Structure

index.html: Contains the HTML structure, including the input field, add button, and task list container. Links to styles.css and script.js.
styles.css: Defines styles for the layout, input, buttons, and task list, ensuring a clean and responsive design.
script.js: Implements functionality for adding tasks, toggling completion status, and removing tasks using DOM manipulation and event handling.

Usage

Adding a Task: Type a task in the input field and click "Add Task" or press Enter. The task appears in the list below.
Completing a Task: Click the task text to mark it as complete (adds strikethrough and gray background). Click again to undo.
Removing a Task: Click the "Remove" button next to a task to delete it from the list.
Notes: Empty inputs are ignored to prevent adding blank tasks. The input field clears and refocuses after adding a task.

Learning Outcomes
This project demonstrates:

DOM Manipulation: Creating and removing elements, updating classes dynamically.
Event Handling: Listening for clicks and keypresses to trigger actions.
State Management: Managing the task list's state without a backend.
CSS Styling: Using flexbox, hover effects, and responsive design principles.

Future Improvements

Add localStorage to persist tasks across page reloads.
Include task categories or priorities.
Implement task editing functionality.
Enhance styling with animations for task addition/removal.


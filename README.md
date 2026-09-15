# Node.js Course

This repository contains my practical coursework, experiments, exercises, and learning activities for the Node.js course.

The course follows a step-by-step approach, starting from Node.js fundamentals and gradually moving toward backend development, APIs, databases, and deployment.

---

# 📚 Course Learning Flow

```text
Node.js Fundamentals
        ↓
Node.js Modules
        ↓
Core Modules
        ↓
File System
        ↓
Synchronous & Asynchronous Programming
        ↓
Callbacks
        ↓
EventEmitter & Event-Driven Programming
        ↓
Promises & Async/Await
        ↓
Event Loop
        ↓
HTTP & Servers
        ↓
Routing
        ↓
GraphQL
        ↓
Express.js
        ↓
MongoDB
        ↓
REST APIs
        ↓
Postman
        ↓
Git & GitHub
        ↓
Docker
        ↓
Student Management System
```

---

# 1. Node.js Fundamentals

## What is Node.js?

Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser.

It is commonly used for:

* Backend development
* Web servers
* APIs
* Real-time applications
* Command-line applications

### How it works

Node.js uses the V8 JavaScript engine to execute JavaScript code.

Instead of running JavaScript only inside a browser, Node.js allows JavaScript to interact with the operating system, files, network, and other backend resources.

### Example

A JavaScript file can be executed directly from the terminal using Node.js.

### Key Point

**Node.js = JavaScript outside the browser**

---

# 2. Node.js Modules

## What is a Module?

A module is a reusable part of a program that provides specific functionality.

Modules help divide a large application into smaller and manageable parts.

### Why modules are used

* Code organization
* Code reuse
* Better maintainability
* Separation of functionality

### Examples

* `fs` → File System operations
* `path` → File and directory paths
* `http` → HTTP servers
* `events` → Event handling

### Key Point

**Modules provide reusable functionality.**

---

# 3. CommonJS

## What is CommonJS?

CommonJS is a module system commonly used in Node.js.

### How it works

CommonJS allows a program to import and use modules when required.

The `require()` mechanism is commonly used to load modules.

### Example

A Node.js program can load the File System module when it needs to work with files.

### Key Point

**CommonJS is one of the module systems used by Node.js.**

---

# 4. Node.js Core Modules

Node.js provides several built-in modules that can be used without installing external packages.

Important core modules learned in this course include:

* Path
* File System
* Events
* HTTP

These modules provide basic functionality required for Node.js applications.

---

# 5. Path Module

## Definition

The `path` module provides utilities for working with file and directory paths.

### How it works

It helps a program work with paths in a platform-independent way.

It can be used to find:

* File name
* Directory name
* File extension
* Complete paths

### Important Methods

* `basename()` → Gets the file name
* `dirname()` → Gets the directory path
* `extname()` → Gets the file extension
* `join()` → Combines path sections

### Example

If a program has the path of a JavaScript file, the Path module can be used to find its file name, directory, or extension.

---

# 6. File System Module

## Definition

The `fs` module is a built-in Node.js module used to work with files and directories.

### Why it is used

The File System module allows applications to store, read, modify, and remove data from files.

### Main File Operations

* Create
* Read
* Update
* Delete

### Example

A student management application can use the File System module to store student information in a file and later read or update that information.

### Key Point

**`fs` = File System operations**

---

# 7. File Creation and Writing

## Definition

File writing is the process of creating a file or replacing its existing content with new data.

### How it works

Node.js receives the file name and data and writes that data into the file.

If the file does not exist, it can be created.

### Example

A program can create a `student.txt` file and store student information in it.

---

# 8. File Reading

## Definition

File reading is the process of retrieving the contents of a file.

### How it works

Node.js accesses the specified file and returns its stored content.

### Example

A program can read a student file and display the student's stored information.

---

# 9. File Updating and Appending

## Definition

Updating means modifying existing file data.

Appending means adding new data to the existing content without removing the previous content.

### How it works

New information can be added to the end of an existing file.

### Example

A student file may initially contain the student's name. Course information can later be added to the same file.

---

# 10. File Deletion

## Definition

File deletion means permanently removing a file from the file system.

### How it works

Node.js identifies the required file and removes it from the system.

### Example

After completing an experiment, a temporary student data file can be deleted.

---

# 11. CRUD Operations

CRUD represents the four basic operations performed on data.

| Operation | Meaning                |
| --------- | ---------------------- |
| Create    | Add new data           |
| Read      | Retrieve existing data |
| Update    | Modify existing data   |
| Delete    | Remove data            |

### File System Example

A student file can be:

**Create** → Create the student file
**Read** → Read student information
**Update** → Add or modify course information
**Delete** → Remove the student file

### Key Point

**CRUD = Create + Read + Update + Delete**

---

# 12. Synchronous Programming

## Definition

Synchronous execution means the program waits for the current operation to finish before moving to the next operation.

### Flow

```text
Operation 1
    ↓
Wait
    ↓
Operation 2
    ↓
Operation 3
```

### Example

When a file is read synchronously, Node.js waits until the file-reading operation finishes before continuing.

### Key Point

**Synchronous = Wait and then continue**

---

# 13. Asynchronous Programming

## Definition

Asynchronous execution allows the program to continue working while another operation is being processed.

### Flow

```text
Start Operation
      ↓
Continue Other Work
      ↓
Operation Completes
```

### Example

While Node.js is reading a file asynchronously, other parts of the program can continue executing.

### Key Point

**Asynchronous = Start and continue**

---

# 14. Blocking

## Definition

A blocking operation prevents further execution until the current operation is completed.

### How it works

The program waits for the current task before continuing with the next task.

### Example

Synchronous file reading can block execution until the file is completely read.

### Key Point

**Blocking = Execution has to wait**

---

# 15. Non-Blocking

## Definition

A non-blocking operation allows other code to continue while the current operation is being processed.

### How it works

The operation is started, but Node.js does not need to stop the entire program while waiting for it to finish.

### Example

Asynchronous file reading allows other code to execute while the file is being read.

### Key Point

**Non-blocking = Execution can continue**

---

# 16. Callback

## Definition

A callback is a function passed to another function and executed later.

### How it works

A callback is commonly used to perform an action after an operation finishes.

### Flow

```text
Function Starts
      ↓
Operation Happens
      ↓
Operation Completes
      ↓
Callback Executes
```

### Example

After an asynchronous file operation finishes, a callback can process the result.

### Key Point

Callbacks are commonly used with asynchronous operations.

---

# 17. EventEmitter

## Definition

`EventEmitter` is a Node.js mechanism used to create, listen for, and trigger events.

### How it works

An event listener waits for a particular event. When the event is triggered, the listener executes.

### Flow

```text
Event Created
     ↓
Listener Waits
     ↓
Event Triggered
     ↓
Listener Executes
```

### Important Methods

* `on()` → Listen for an event
* `emit()` → Trigger an event
* `once()` → Listen for an event only once
* `removeListener()` → Remove an event listener

### Example

A `studentRegistered` event can be triggered when a new student registers, and a listener can respond to that event.

---

# 18. Event-Driven Programming

## Definition

Event-driven programming is a programming approach where program execution is controlled by events.

### How it works

The application waits for events such as:

* User actions
* HTTP requests
* File operations completing
* Database operations
* Custom application events

When an event occurs, the corresponding listener performs an action.

### Basic Flow

**Event → Listener → Action**

### Example

When a student registers, a `studentRegistered` event can trigger another operation.

---

# 19. DOM-like Events in Node.js

## Definition

DOM-like event handling means simulating browser-style events in Node.js using `EventEmitter`.

### How it works

Node.js does not provide the browser DOM, but `EventEmitter` can be used to create similar event behavior.

### Example

A button click can be simulated using an event such as `click`.

### Comparison

```text
Browser:
Click → Event Listener → Action

Node.js:
Event Trigger → Event Listener → Action
```

### Key Point

**EventEmitter can be used to simulate event-based behavior in Node.js.**

---

# 20. Promise

## Definition

A Promise represents the eventual result of an asynchronous operation.

It can represent either successful completion or failure.

### Promise States

```text
Pending
   ↓
 ┌───────┐
 ↓       ↓
Success  Failure
```

### Example

A database request can be represented using a Promise that eventually returns data or an error.

### Key Point

**Promise = Future result of an asynchronous operation**

---

# 21. Async/Await

## Definition

`async/await` provides a cleaner way to work with Promises.

### How it works

`await` allows an asynchronous operation to be handled in a sequential-looking way inside an asynchronous function.

The surrounding Node.js system can continue handling other work.

### Example

An application can wait for database data using `await` instead of using multiple Promise chains.

### Key Point

**Async/Await = Cleaner Promise-based asynchronous programming**

---

# 22. Event Loop

## Definition

The Event Loop is a mechanism in Node.js that helps handle asynchronous operations without blocking JavaScript execution.

### Basic Flow

```text
Synchronous Code
       ↓
Asynchronous Operation
       ↓
Event Loop
       ↓
Callback Executes
```

### How it works

Node.js first executes synchronous code.

Asynchronous operations are handled through Node.js's asynchronous system. When their callbacks become eligible to run, the Event Loop helps schedule their execution.

### Example

If a timer is scheduled, Node.js can continue executing synchronous code first. The timer callback runs later when it becomes eligible.

### Key Point

**The Event Loop is a major part of Node.js's asynchronous architecture.**

---

# 23. process.nextTick()

## Definition

`process.nextTick()` schedules a callback to run after the current synchronous operation finishes.

### How it works

The current synchronous code completes first. The `nextTick` callback is then processed before Node.js continues through later Event Loop phases.

### Example

If synchronous statements and `process.nextTick()` are present, the synchronous statements execute first, followed by the `nextTick` callback.

### Key Point

**`process.nextTick()` has very high priority in Node.js scheduling behavior.**

---

# 24. setTimeout()

## Definition

`setTimeout()` schedules a callback to run after a specified minimum delay.

### How it works

The callback does not necessarily execute exactly when the delay ends. It becomes eligible to execute after the specified delay.

### Example

A callback can be scheduled to run after approximately one second.

### Key Point

**The specified time is a minimum delay, not an exact execution time.**

---

# 25. setImmediate()

## Definition

`setImmediate()` schedules a callback to run during the Event Loop's check phase.

### How it works

The callback is scheduled for a later stage of the Event Loop.

### Example

A callback can be scheduled to execute during a later iteration of the Event Loop.

### Key Point

The relative order of `setTimeout(..., 0)` and `setImmediate()` can vary depending on where they are scheduled.

---

# 26. HTTP Module

## Definition

The `http` module is a built-in Node.js module used to create HTTP servers.

### How it works

A client sends an HTTP request to the server. The server processes the request and sends an HTTP response back.

### Flow

```text
Client
  ↓
HTTP Request
  ↓
Node.js Server
  ↓
HTTP Response
  ↓
Client
```

### Example

A browser can request a page from a Node.js server, and the server can return text or other data.

---

# 27. HTTP Server

## Definition

An HTTP server receives requests from clients and sends responses back.

### How it works

The server listens on a specific port and waits for client requests.

When a request arrives, the server determines how to respond.

### Example

A Node.js server can run on port `8000`. Opening the corresponding localhost address in a browser sends a request to that server.

---

# 28. Request and Response

## Request

A request contains information sent from the client to the server.

It can include:

* URL
* HTTP method
* Headers
* Other request data

### Response

A response is sent from the server back to the client.

It can include:

* Status code
* Headers
* Response data

### Key Point

**Request = Client → Server**

**Response = Server → Client**

---

# 29. HTTP Status Codes

## Definition

HTTP status codes indicate the result of an HTTP request.

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |

### Example

If a requested page exists, the server can return **200 OK**.

If the requested page does not exist, the server can return **404 Not Found**.

---

# 30. HTTP Routing

## Definition

Routing means deciding how a server responds to different URLs or HTTP requests.

### How it works

```text
Request
   ↓
Check URL
   ↓
Match Route
   ↓
Send Response
```

### Example

```text
/        → Home page
/about   → About page
/users   → Users page
/other   → 404 Not Found
```

### Key Point

Routing allows one server to handle multiple URLs.

---

# 🧪 Practical Lab Experiments

The concepts learned above are applied through practical experiments.

---

# Experiment 1 — Events and Event Loop

## Topics Covered

* Custom EventEmitter
* Creating custom events
* `greet` event
* `exit` event
* Event listeners
* Event triggering
* DOM-like event handling
* `process.nextTick()`
* `setTimeout()`
* `setImmediate()`
* Event Loop behavior

## Practical Work

This experiment demonstrates how Node.js handles custom events and how different asynchronous scheduling mechanisms work.

## Folder

```text
02-experiment-1/
├── part1-events.js
├── part2-dom-events.js
└── part3-event-loop.js
```

---

# Experiment 2 — File CRUD

## Topics Covered

* File System module
* File creation
* File writing
* File reading
* File updating
* File appending
* File deletion
* CRUD operations

## Practical Work

A student file is created, its contents are read, additional information is added, and the file is finally deleted.

## Folder

```text
03-experiment-2/
└── file-crud.js
```

---

# Experiment 3 — Basic HTTP Server

## Topics Covered

* HTTP module
* HTTP server
* Client and server communication
* Request
* Response
* Status codes
* Basic routing
* 404 handling
* Localhost
* Port

## Practical Work

A basic Node.js server is created that responds to the home route and returns a 404 response for an unknown route.

## Folder

```text
04-experiment-3/
└── server.js
```

---

# 📁 Repository Structure

```text
FSD-15-248/
│
├── README.md
├── .gitignore
│
├── 01-node-basics/
│   ├── hello-node.js
│   ├── modules.js
│   ├── fs-basics.js
│   ├── callbacks.js
│   ├── blocking.js
│   ├── non-blocking.js
│   ├── event-emitter.js
│   └── event-loop.js
│
├── 02-experiment-1/
│   ├── part1-events.js
│   ├── part2-dom-events.js
│   └── part3-event-loop.js
│
├── 03-experiment-2/
│   └── file-crud.js
│
└── 04-experiment-3/
    └── server.js
```

---

# 🚀 Upcoming Experiments

The course will continue from basic Node.js concepts toward complete backend applications.

## GraphQL

* GraphQL fundamentals
* GraphQL schema
* Queries
* Resolvers
* GraphQL API

## Express.js

* Express server
* Middleware
* Routing
* Serving HTML files

## HTTP Methods

* GET
* POST
* PUT
* DELETE

## MongoDB

* MongoDB setup
* Database
* Collections
* Documents
* MongoDB CRUD operations

## REST API

* Express + MongoDB
* REST API development
* API routes
* CRUD API operations

## Postman

* API testing
* Sending requests
* Testing responses
* Testing different HTTP methods

## Git and GitHub

* Repository management
* Version control
* Commits
* Branches
* Push and pull
* Project collaboration

## Docker

* Docker fundamentals
* Dockerizing Node.js applications
* MongoDB containers
* Node.js + MongoDB application containerization

## Final Project

### Student Management System

The course will eventually combine Node.js, Express.js, MongoDB, REST APIs, and other learned technologies into a complete Student Management System.

---

# 🎯 Learning Workflow

```text
Learn
  ↓
Understand
  ↓
Practice
  ↓
Experiment
  ↓
Test
  ↓
Document
  ↓
Commit
  ↓
Push to GitHub
```

Each experiment represents actual practical development work.

The repository is maintained incrementally so that concepts, experiments, and projects can be reviewed through both the source files and this README.

---

# 🛠️ Technologies

* JavaScript
* Node.js
* Express.js
* GraphQL
* MongoDB
* Postman
* Git
* GitHub
* Docker

---

# 👨‍💻 Author

**Anuj Yadav**

B.Tech CSE Student
ABES Engineering College

GitHub: Anuj-yadav-5

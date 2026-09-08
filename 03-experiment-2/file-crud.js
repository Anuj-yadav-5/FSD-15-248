// Experiment 2 - File CRUD using the fs module

// Import Node.js's built-in File System module
const fs = require("fs");

// Name of the file we will create and manage
const fileName = "student.txt";

// 1. CREATE / WRITE
// Create the file and write initial content into it
fs.writeFileSync(fileName, "Student Name: Anuj");

// 2. READ
// Read the contents of the file
const initialData = fs.readFileSync(fileName, "utf8");
console.log("Initial file content:", initialData);

// 3. UPDATE / APPEND
// Add more information to the existing file
fs.appendFileSync(fileName, "\nCourse: Node.js");

// Read the updated file
const updatedData = fs.readFileSync(fileName, "utf8");
console.log("Updated file content:", updatedData);

// 4. DELETE
// Delete the file from the file system
fs.unlinkSync(fileName);

console.log("File deleted successfully.");
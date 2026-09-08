// Import Node.js File System module
const fs = require("fs");

// This operation is synchronous (blocking)
// Node.js waits until the file is completely read
// Read the file from the 01-node-basics folder
const data = fs.readFileSync("01-node-basics/new.txt", "utf8");

// This line runs after the file has been read
console.log("File contents:", data);

// This line runs after the blocking operation finishes
console.log("Program finished.");
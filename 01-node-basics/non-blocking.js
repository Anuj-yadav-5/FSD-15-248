// Import Node.js File System module
const fs = require("fs");

// Start reading the file asynchronously (non-blocking)
// Node.js does not wait for the file operation to finish
fs.readFile("01-node-basics/new.txt", "utf8", (error, data) => {
  // Check whether an error occurred
  if (error) {
    console.log("Error:", error);
    return;
  }

  // This runs when the file has been read
  console.log("File contents:", data);
});

// This line can run before the file reading finishes
console.log("Program finished.");
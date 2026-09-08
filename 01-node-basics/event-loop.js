// Import Node.js File System module
const fs = require("fs");

// This runs synchronously and prints immediately
console.log("1");

// Start an asynchronous file-reading operation
fs.readFile("01-node-basics/event-loop.js", "utf8", () => {
  // This callback runs after the file-reading operation completes
  console.log("2 - File reading completed");
});

// Schedule a timer callback
setTimeout(() => {
  // This callback also runs later
  console.log("3 - Timer completed");
}, 0);

// This runs synchronously
console.log("4");

// This also runs synchronously
console.log("5");
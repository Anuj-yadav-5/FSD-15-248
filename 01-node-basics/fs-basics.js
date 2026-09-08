// Import Node.js File System module
const fs = require("fs");

// 1. WRITE / CREATE
fs.writeFileSync("new.txt", "Hello Standing");

// 2. READ
console.log(fs.readFileSync("new.txt", "utf8"));

// 3. ADD / APPEND
fs.appendFileSync("new.txt", ", Hello Node.js");

// 4. READ AGAIN
console.log(fs.readFileSync("new.txt", "utf8"));

// 5. DELETE
fs.unlinkSync("new.txt");

console.log("File deleted");
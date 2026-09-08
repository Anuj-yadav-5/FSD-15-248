// Import Node.js's built-in path module
const path = require("path");

// __filename contains the complete path of the current file
// path.basename() extracts only the file name
console.log("File name:", path.basename(__filename));

// Get the directory path of the current file
console.log("Directory:", path.dirname(__filename));

// Get the file extension of the current file
console.log("Extension:", path.extname(__filename));
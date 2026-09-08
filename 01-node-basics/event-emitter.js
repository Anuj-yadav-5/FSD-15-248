// Import EventEmitter from Node.js's built-in events module
const EventEmitter = require("events");

// Create an EventEmitter object
const emitter = new EventEmitter();

// Listen for a "studentRegistered" event
emitter.on("studentRegistered", (studentName) => {
  console.log("Student registered:", studentName);
});

// Emit the "studentRegistered" event with student data
emitter.emit("studentRegistered", "Anuj");
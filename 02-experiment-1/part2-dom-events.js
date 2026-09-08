// Experiment 1 - Part 2
// Simulate DOM-like event handling in Node.js using EventEmitter

// Import EventEmitter from Node.js's built-in events module
const EventEmitter = require("events");

// Create an EventEmitter object
const button = new EventEmitter();

/// Simulate adding an event listener
button.on("click", (buttonName) => {
  console.log(buttonName + " was clicked!");
});

/// Simulate triggering the click event and passing data
button.emit("click", "Submit button");
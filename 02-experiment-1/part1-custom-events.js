// Experiment 1 - Part 1
// Custom EventEmitter with "greet" and "exit" events

// Import EventEmitter from Node.js's built-in events module
const EventEmitter = require("events");

// Create a custom EventEmitter object
const emitter = new EventEmitter();

// Listen for the "greet" event
emitter.on("greet", (name) => {
  console.log("Hello, " + name + "!");
});

// Listen for the "exit" event
emitter.on("exit", () => {
  console.log("Exit event received.");
});

// Trigger the "greet" event and pass a name as data
emitter.emit("greet", "Node.js");

// Trigger the "exit" event
emitter.emit("exit");
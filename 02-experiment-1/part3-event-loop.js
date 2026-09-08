// Experiment 1 - Part 3
// Visualize the Event Loop using setTimeout, setImmediate, and process.nextTick

// This line runs synchronously
console.log("1");

// Schedule a callback using process.nextTick()
// Runs after the current synchronous code finishes
process.nextTick(() => {
  console.log("2 - nextTick");
});

// Schedule a timer callback
// Runs later through the Event Loop
setTimeout(() => {
  console.log("4 - setTimeout");
}, 0);

// Schedule a callback using setImmediate()
// Runs during the Event Loop's check phase
setImmediate(() => {
  console.log("5 - setImmediate");
});

// This line also runs synchronously
console.log("3");
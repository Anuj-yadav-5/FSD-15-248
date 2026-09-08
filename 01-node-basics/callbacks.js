// This function accepts another function as a callback
function greet(name, callback) {
  console.log("Hello, " + name);

  // Wait for 5 seconds before calling the callback
  setTimeout(() => {
    callback();
  }, 5000);
}

// This function will be used as a callback
function finished() {
  console.log("Greeting completed.");
}

// Pass the finished function as the callback
greet("JavaScript", finished);
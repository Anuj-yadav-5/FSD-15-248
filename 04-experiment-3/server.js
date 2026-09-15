// Experiment 3 - Basic HTTP Server

// Import Node.js's built-in HTTP module
const http = require("http");

// Create an HTTP server

const server = http.createServer((req, res) => {

  // Check if the requested URL is the home route

  if (req.url === "/") {
    // Send a successful HTTP status
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response to the client
    res.end("Welcome to my Node.js server!");
  } else {
    // Send a 404 status if the route does not exist
    res.writeHead(404, { "Content-Type": "text/plain" });

    // Send the error response
    res.end("404 - Page Not Found");
  }
});

// Start the server on port 8000
server.listen(8000, () => {
  console.log("Server is running at http://localhost:8000");
});
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const routes = require("./src/routes/main.routes");
app.use("/", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});

// Export the Express API
module.exports = app;

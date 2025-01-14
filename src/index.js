const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Import routes
const routes = require("./routes/main.routes");
app.use("/", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});

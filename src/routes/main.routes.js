const express = require("express");
const router = express.Router();
const controller = require("../controller/main.controller");

// Health check endpoint
router.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy" });
});

// Post endpoint to handle JSON
router.post("/process", controller.handlePostRequest);

module.exports = router;

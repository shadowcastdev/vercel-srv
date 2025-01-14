// Controller to handle POST request
exports.handlePostRequest = (req, res) => {
  try {
    const { data } = req.body; // Access the JSON payload
    console.log("Received JSON:", data);

    // Send response
    res.status(200).json({
      status: "success",
      data: JSON.parse(data),
      message: "Received message successfully",
    });
  } catch (error) {
    console.error("Error processing JSON:", error);
    res.status(400).json({ status: "error", message: "Invalid JSON payload" });
  }
};

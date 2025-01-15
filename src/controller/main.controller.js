// Controller to handle POST request
exports.handlePostRequest = (req, res) => {
  try {
    const { data } = req.body;
    console.log("body payload:", data);

    // Process stringify
    const stringifyData = JSON.stringify(data);
    console.log("stringifyData:", stringifyData);

    // Convert JSON
    const jsonData = JSON.parse(stringifyData);
    console.log("jsonData:", jsonData);

    // Send response
    res.status(200).json({
      status: "success",
      data: jsonData,
      message: "Received message successfully",
    });
  } catch (error) {
    console.error("Error processing JSON:", error);
    res.status(400).json({ status: "error", message: "Invalid JSON payload" });
  }
};

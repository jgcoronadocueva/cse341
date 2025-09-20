// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Import routes
const index = require("./routes");

app.use("/", index);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
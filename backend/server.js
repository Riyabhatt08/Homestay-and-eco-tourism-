const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Trishul Eco Homestays API");
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
const places = [
  {
    id: 1,
    name: "Nainital",
    location: "Uttarakhand",
    description: "Beautiful hill station famous for Naini Lake."
  },
  {
    id: 2,
    name: "Mussoorie",
    location: "Uttarakhand",
    description: "Known as the Queen of Hills."
  },
  {
    id: 3,
    name: "Ranikhet",
    location: "Uttarakhand",
    description: "Peaceful hill station with scenic views."
  }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Backend is Running");
});

// API Route
app.get("/api/places", (req, res) => {
  res.json(places);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
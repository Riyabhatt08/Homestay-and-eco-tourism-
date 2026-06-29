const express = require("express");

const router = express.Router();

const {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
  searchRooms,
} = require("../controllers/roomController");

// GET ALL
router.get("/", getRooms);

// SEARCH
router.get("/search", searchRooms);

// GET ONE
router.get("/:id", getRoomById);

// CREATE
router.post("/", createRoom);

// UPDATE
router.put("/:id", updateRoom);

// DELETE
router.delete("/:id", deleteRoom);

module.exports = router;
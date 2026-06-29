const rooms = require("../data/rooms");

// GET ALL ROOMS
const getRooms = (req, res) => {
  res.status(200).json(rooms);
};

// GET ROOM BY ID
const getRoomById = (req, res) => {
  const room = rooms.find((room) => room.id == req.params.id);

  if (!room) {
    return res.status(404).json({
      message: "Room not found",
    });
  }

  res.status(200).json(room);
};

// CREATE ROOM
const createRoom = (req, res) => {
  const { name, location, price, available } = req.body;

  const newRoom = {
    id: rooms.length + 1,
    name,
    location,
    price,
    available,
  };

  rooms.push(newRoom);

  res.status(201).json(newRoom);
};

// UPDATE ROOM
const updateRoom = (req, res) => {
  const room = rooms.find((room) => room.id == req.params.id);

  if (!room) {
    return res.status(404).json({
      message: "Room not found",
    });
  }

  room.name = req.body.name || room.name;
  room.location = req.body.location || room.location;
  room.price = req.body.price || room.price;

  if (req.body.available !== undefined) {
    room.available = req.body.available;
  }

  res.status(200).json(room);
};

// DELETE ROOM
const deleteRoom = (req, res) => {
  const index = rooms.findIndex((room) => room.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      message: "Room not found",
    });
  }

  rooms.splice(index, 1);

  res.status(200).json({
    message: "Room deleted successfully",
  });
};

// SEARCH ROOM
const searchRooms = (req, res) => {
  const q = (req.query.q || "").toLowerCase();

  const filteredRooms = rooms.filter(
    (room) =>
      room.name.toLowerCase().includes(q) ||
      room.location.toLowerCase().includes(q)
  );

  res.status(200).json(filteredRooms);
};

module.exports = {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
  searchRooms,
};
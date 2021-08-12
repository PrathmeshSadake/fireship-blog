import Room from "../models/room";

export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status().json({
      success: false,
      error: error.message,
    });
  }
};

export const createNewRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status().json({
      success: false,
      error: error.message,
    });
  }
};

export const getRoomById = async (req, res) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    res.status(404).json({
      success: false,
      error: "Room not found with this id",
    });
  }

  res.status(200).json({
    success: true,
    room,
  });
};

export const updateRoomById = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);
    if (!room) {
      res.status(404).json({
        success: false,
        error: "Room not found with this id",
      });
    }
    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status().json({
      success: false,
      error: error.message,
    });
  }
};

export const deleteRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      res.status(404).json({
        success: false,
        error: "Room not found with this id",
      });
    }
    await room.remove();
    res.status(200).json({
      success: true,
      message: "Room is Deleted",
    });
  } catch (error) {
    res.status().json({
      success: false,
      error: error.message,
    });
  }
};

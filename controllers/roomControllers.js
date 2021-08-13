import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import APIFeatures from "../utils/apiFeatures";

export const getAllRooms = catchAsyncErrors(async (req, res) => {
  const resultsPerPage = 4;
  const roomsCount = await Room.countDocuments();
  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();
  let rooms = await apiFeatures.query;
  let filteredRoomsCount = rooms.length;

  apiFeatures.pagination(resultsPerPage);
  rooms = await apiFeatures.query;
  res.status(200).json({
    success: true,
    roomsCount,
    resultsPerPage,
    filteredRoomsCount,
    rooms,
  });
});

export const createNewRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});

export const getRoomById = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this id", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});

export const updateRoomById = catchAsyncErrors(async (req, res) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this id", 404));
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
});

export const deleteRoomById = catchAsyncErrors(async (req, res) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this id", 404));
  }
  await room.remove();
  res.status(200).json({
    success: true,
    message: "Room is Deleted",
  });
});

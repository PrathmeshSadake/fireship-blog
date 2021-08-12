import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter room name"],
    trim: true,
    maxLength: [100, "Room name cannot exceed 100 characters"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please enter room price per night"],
    maxLength: [4, "Room price cannot exceed 9999"],
  },
  description: {
    type: String,
    required: [true, "Please enter room description"],
  },
  address: {
    type: String,
    required: [true, "Please enter room address"],
  },
  guestCapacity: {
    type: Number,
    required: [true, "Please enter room guest capacity"],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please enter number of beds in a room"],
  },
  internet: {
    type: Boolean,
    default: true,
  },
  breakfast: {
    type: Boolean,
    default: true,
  },
  airConditioned: {
    type: Boolean,
    default: true,
  },
  petsAllowed: {
    type: Boolean,
    default: true,
  },
  roomCleaning: {
    type: Boolean,
    default: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter room category"],
    enum: {
      values: ["King", "Twins", "Single"],
      message: "Please select correct category of room",
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Room || mongoose.model("Room", roomSchema);

const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const positionSchema = new Schema({
  position: { type: String },
  userID: { type: Number },
  speechDetails: {
    speechName: { type: String },
    path: { type: String },
    course: { type: String },
    maxLength: { type: Number },
    minLength: { type: Number },
  },
});

const meetingSchema = new Schema(
  {
    type: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    positions: {
      type: [positionSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;

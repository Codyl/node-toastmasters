const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const positionSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  desc: {
    type: String,
  },
  responsibility: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Position", positionSchema);

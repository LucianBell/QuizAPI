const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  points: { type: Int16Array, default: 0 },
});

module.exports = mongoose.model("User", userSchema);
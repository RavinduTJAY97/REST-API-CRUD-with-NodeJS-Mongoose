const mongoose = require("mongoose");

// Define a schema for user model
const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

module.exports = User; // Export the model for use in other files

const express = require("express");
const app = require("./app");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();

// Environment variables
const port = process.env.PORT;
const host = process.env.HOST;
const uri = process.env.MONGODB_URI;

// using middlewares
app.use(cors());
app.use(express.json());

// server configurations
const server = app.listen(port, host, () => {
  console.log(`Server is running on ${server.address().port}`);
});

// db connection
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

// calling the connect method
connect();

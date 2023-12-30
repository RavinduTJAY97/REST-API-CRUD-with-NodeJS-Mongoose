const express = require("express");
const app = require("./app");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3001;
const host = "127.0.0.1";
const uri =
  "mongodb+srv://ravindujayasingha:zLjPIbtE05Ng8KXb@cluster001.pynbzkt.mongodb.net/?retryWrites=true&w=majority";

//using middlewares
app.use(cors());
app.use(express.json());

//server configurations
const server = app.listen(port, host, () => {
  console.log(`Server is running on ${server.address().port}`);
});

//db connection
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

//calling the connect method
connect();

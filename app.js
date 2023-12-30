const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");
const router = require("./router");
// using middlewares

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/api", router);
module.exports = app;

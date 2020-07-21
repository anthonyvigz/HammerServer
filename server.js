/// importing dependencies and middleware

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// adding routers

const dataRouter = require("./routers/dataRouter");

const server = express();

/// apply middleware

server.use(helmet());
server.use(express.json());
server.use(cors());

// applying endpoints

server.use("/data", dataRouter);

// main endpoint

server.get("/", (req, res) => {
  res.send("<h1>Welcome to the Hammer server.</h1>");
});

module.exports = server;

const express = require("express");

const PersonsRouter = require("../persons/personRouter");

const server = express();

server.use(express.json());

server.use("/api/persons", PersonsRouter);

server.get("/", (req, res) => {
  res.send("the endpoints r working friends");
});



module.exports = server;

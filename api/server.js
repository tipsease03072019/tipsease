const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// const configureRoutes = require('../config/routes.js');

const server = express();

const customersRouter = require("../routes/customers/customersRouter");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/customers", customersRouter);

// configureRoutes(server);

server.get("/", (req, res) => {
  res.send("Tipsease");
});

module.exports = server;

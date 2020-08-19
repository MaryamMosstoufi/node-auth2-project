const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/authRouter.js");
const usersRouter = require("../users/usersRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

//Test API
server.get("/api", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
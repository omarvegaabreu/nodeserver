const express = require("express");

const usersRouter = express.Router();
const USERS_CONTROLLERS = require("../controllers/users.controllers");

usersRouter.post("/", USERS_CONTROLLERS.postUser);
usersRouter.get("/", USERS_CONTROLLERS.getAllUsers);
usersRouter.get("/:id", USERS_CONTROLLERS.getSingleUser);

module.exports = usersRouter;

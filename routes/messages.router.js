const express = require("express");

const MESSAGES_CONTROLLERS = require("../controllers/messages.controllers");
const messagesRouter = express.Router();

messagesRouter.get("/", MESSAGES_CONTROLLERS.getMessage);
messagesRouter.post("/", MESSAGES_CONTROLLERS.postMessage);

module.exports = messagesRouter;

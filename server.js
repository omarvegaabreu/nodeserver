const EXPRESS = require("express");
const MESSAGES_CONTROLLERS = require("./controllers/messages.controllers");
const USERS_CONTROLLERS = require("./controllers/users.controllers");
const { contentType } = require("express/lib/response");
const APP = EXPRESS();
const PORT = 3000;

APP.get("/users", (req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now();
  console.log(
    `request method ${req.method} request url ${req.url} Delta:${delta}`
  );
});

APP.use(EXPRESS.json());

APP.post("/users", USERS_CONTROLLERS.postUser);

APP.get("/users", USERS_CONTROLLERS.getAllUsers);

APP.get("/users/:id", USERS_CONTROLLERS.getSingleUser);

APP.get("/messages", MESSAGES_CONTROLLERS.getMessage);

APP.post("/messages", MESSAGES_CONTROLLERS.postMessage);

APP.listen(PORT, () => {
  console.log(`APP listening on port ${PORT}`);
});

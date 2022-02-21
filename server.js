const EXPRESS = require("express");
const path = require("path");

const usersRouter = require("./routes/users.router");
const messagesRouter = require("./routes/messages.router");
const APP = EXPRESS();
const PORT = 3000;

APP.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method}${req.baseUrl}${req.url} request time:${delta}ms`);
});

APP.use("/site", EXPRESS.static(path.join(__dirname, "public")));
APP.use(EXPRESS.json());
APP.use("/users", usersRouter);
APP.use("/messages", messagesRouter);

APP.listen(PORT, () => {
  console.log(`APP listening on port ${PORT}`);
});

const express = require("express");
const app = express();
const port = 3000;

const users = [
  {
    id: 0,
    name: "Omar Vega",
  },
  {
    id: 1,
    name: "Alejandro Vega",
  },
  {
    id: 2,
    name: "Abigail Vega",
  },
  {
    id: 3,
    name: "Rosely Vega",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const userID = Number(req.params.id);
  const currentUser = users[userID];

  if (currentUser) {
    res.json(currentUser);
  } else {
    res.status(401).json({
      message: "Not a user",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("Hi this is messages");
});

app.post("/messages", (req, send) => {
  console.log("this is messages");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const USERS_MODEL = require("../models/users.models");

// function
// }

function postUser(req, res) {
  console.log(req.body.name);
  if (!req.body.name) {
    return res.status(400).json("Missing user name");
  }
  const newUser = {
    id: USERS_MODEL.length,
    name: req.body.name,
  };

  USERS_MODEL.push(newUser);
}

function getAllUsers(req, res) {
  res.json(USERS_MODEL);
}

function getSingleUser(req, res) {
  const userID = Number(req.params.id);
  const currentUser = USERS_MODEL[userID];

  if (currentUser) {
    res.json(currentUser);
  } else {
    res.status(401).json("Not a user");
  }
}

module.exports = {
  postUser,
  getAllUsers,
  getSingleUser,
};

const usersModel = require("../models/users.models");

function postUser(req, res) {
  console.log(req.body.name);
  if (!req.body.name) {
    return res.status(400).json("Missing user name");
  }
  const newUser = {
    id: usersModel.length,
    name: req.body.name,
  };

  usersModel.push(newUser);
}

function getAllUsers(req, res) {
  res.json(usersModel);
}

function getSingleUser(req, res) {
  const userID = Number(req.params.id);
  const currentUser = usersModel[userID];

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

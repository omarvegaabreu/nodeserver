const path = require("path");

function getMessage(req, res) {
  res.sendFile(
    path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  );
}

function postMessage(req, res) {
  console.log("this is messages");
}

module.exports = {
  getMessage,
  postMessage,
};

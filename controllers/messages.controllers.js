const path = require("path");

function getMessage(req, res) {
  res.sendFile(
    path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  );
}

function postMessage(req, send) {
  console.log("this is messages");
}

module.exports = {
  getMessage,
  postMessage,
};

function getMessage(req, res) {
  res.send("Hi this is messages");
}

function postMessage(req, send) {
  console.log("this is messages");
}

module.exports = {
  getMessage,
  postMessage,
};

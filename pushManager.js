const { apnProvider } = require("./apnProvider");
const { deviceID } = require("./deviceID");

function sendAPN(note) {
  apnProvider.send(note, deviceID).then(response => {
    console.log(response);
  });
}

module.exports = sendAPN;

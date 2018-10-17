const apn = require("apn");
const note = new apn.Notification();

function createAPNSNote(
  payload = {},
  expiry = Math.floor(Date.now() / 1000) + 60 * 60 * 24,
  badge = 10,
  sound = "ping.aiff",
  alert = "Hi, how are you today? \u1F604",
  topic = ""
) {
  note.payload = payload;
  note.expiry = expiry;
  note.badge = badge;
  note.sound = sound;
  note.alert = alert;
  note.topic = topic;

  return note;
}

module.exports = createAPNSNote;

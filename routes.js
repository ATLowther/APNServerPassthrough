const express = require("express");
const router = express.Router();

const { createAPNSNote } = require("./apnNoteCreation");
const { sendAPN } = require("./pushManager");

router.post("/", (req, res) => {
  const { amount } = req.body.aps;

  const note = createAPNSNote(amount);
  sendAPN(note);
});

module.exports = router;

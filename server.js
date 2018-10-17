const express = require("express");
const app = new express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || process.argv[2] || 4000;

const routes = require("./routes");

app.use(bodyParser.json());

app.post("/", routes);

app.listen(PORT, () => {
  console.log(`The server is now listening on http://localhost:${PORT}`);
});

module.exports = app;

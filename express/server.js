const express = require("express");
const path = require("path");
const serverless = require("serverless-http");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(
  "/material",
  express.static(path.join(__dirname, "..", "flutterWeb/material"))
);
app.use(
  "/fluent",
  express.static(path.join(__dirname, "..", "flutterWeb/fluent"))
);
app.listen(port, p => {
  console.log("listening on port", port);
});

module.exports = app;
module.exports.handler = serverless(app);

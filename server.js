const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const server = express();

const routes = require("./routes");

server.use(express.static('public'));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/bookmarks-fyi";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Listen on the port
server.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});

const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const server = express();

const routes = require("./routes");

server.use(express.static('public'));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(routes);

// Listen on the port
server.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});

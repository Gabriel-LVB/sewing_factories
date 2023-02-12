require("dotenv").config({ path: "variables.env" });
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");

const routes = require("./routes");

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());

server.use("/api", routes);

server.listen(process.env.PORT, () => {
  console.log("listening to http://localhost:" + process.env.PORT);
});

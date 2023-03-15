const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require("lodash");
const serverless = require("serverless-http");

// making connection
require("../db/conn");

//taking port
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

app.set("view engine", "ejs");

// routes
app.use(require("/.netlify/functions/api", "../routes/auth"));

module.exports.handler = serverless(app);

// app.listen(port, () => {
//   console.log(`Listening to ${port}`);
// });

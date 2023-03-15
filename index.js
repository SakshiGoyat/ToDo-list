const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require("lodash");

// making connection
require("./db/conn");

//taking port
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

app.set("view engine", "ejs");

// routes
app.use(require("./routes/auth"));

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});

const mongoose = require("mongoose");

const ToDo = new mongoose.Schema({
  name: String,
  type: String,
});

const thingsToDo = mongoose.model("thingsToDo", ToDo);

module.exports = thingsToDo;
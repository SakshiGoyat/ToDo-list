const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/ToDoDB");

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

app.set("view engine", "ejs");

const ToDo = new mongoose.Schema({
  name: String,
  type: String,
});

const thingsToDo = mongoose.model("thingsToDo", ToDo);

const Item1 = new thingsToDo({
  name: "Apple",
  type: "fruits",
});

const Item2 = new thingsToDo({
  name: "Mango",
  type: "fruits",
});

const Item3 = new thingsToDo({
  name: "Orange",
  type: "fruits",
});

const work1 = new thingsToDo({
  name: "Homework",
  type: "work list",
});

const work2 = new thingsToDo({
  name: "DSA",
  type: "work list",
});
const work3 = new thingsToDo({
  name: "WEBDEV",
  type: "work list",
});

const ex1 = new thingsToDo({
  name: "Running",
  type: "exercise list",
});

const ex2 = new thingsToDo({
  name: "Pranayam",
  type: "exercise list",
});

function date() {
  const date = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

app.post("/delete", (reqDel, resDel) => {
  const itemName = reqDel.body.checkbox;
  thingsToDo.findByIdAndRemove(itemName, (err) => {
    if (err) {
      console.log(err);
    }
  });
  // console.log(itemName);
  resDel.redirect("/");
});
app.get("/", (req, res) => {
  const food = "Food list";
  thingsToDo.find({ type: "fruits" }, (err, foundItem) => {
    if (err) {
      console.log(err);
    } else {
      if (foundItem.length === 0) {
        const itemArray = [Item1, Item2, Item3, work1, work2, work3, ex1, ex2];
        thingsToDo.insertMany(itemArray, (err) => {
          console.log(err);
        });
        res.redirect();
      } else {
        res.render("list", {
          fullDate: date(),
          listItem: food,
          newItem: foundItem,
        });
      }
    }
  });
});

app.post("/", (reqPost, resPost) => {
  if (reqPost.body.list === "work list") {
    var store = reqPost.body.item;

    const item = new thingsToDo({
      name: store,
      type: "work list",
    });

    item.save();
    resPost.redirect("/work");
  } else if (reqPost.body.list === "Food list") {
    var store = reqPost.body.item;
    const item = new thingsToDo({
      name: store,
      type: "fruits",
    });
    item.save();
    resPost.redirect("/");
  } else {
    var store = reqPost.body.item;
    const item = new thingsToDo({
      name: store,
      type: "exercise list",
    });
    item.save();
    resPost.redirect("/exercise");
  }
});

app.get("/work", (reqWork, resWork) => {
  let work = "work list";

  thingsToDo.find({ type: "work list" }, (err, founditems) => {
    if (err) {
      console.log(err);
    } else {
      resWork.render("list", {
        fullDate: date(),
        listItem: work,
        newItem: founditems,
      });
    }
  });
});

app.post("/work", (reqWork, resWork) => {
  resWork.redirect("/work");
});

app.get("/exercise", (reqEx, resEx) => {
  const exercise = "Exercise list";
  thingsToDo.find({ type: "exercise list" }, (err, founditems) => {
    if (err) {
      console.log(err);
    } else {
      resEx.render("list", {
        fullDate: date(),
        listItem: exercise,
        newItem: founditems,
      });
    }
  });
});

app.post("/exercise", (reqEx, resEx) => {
  resEx.redirect("/exercise");
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});

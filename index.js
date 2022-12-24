const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

app.set("view engine", "ejs");

var itemName = ["Apple", "Dry fruits", "Milk"];
var worklist = ["DSA", "WebDev", "Walk", "Yoga"];

function date() {
  const date = new Date();
  var dayName = "";

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}
app.get("/", (req, res) => {
  const food = "Food list";

  res.render("list", {
    fullDate: date(),
    listItem: food,
    newItem: itemName,
  });
});

app.post("/", (reqPost, resPost) => {
  if (reqPost.body.list === "work list") {
    worklist.push(reqPost.body.item);
    resPost.redirect("/work");
  } else {
    itemName.push(reqPost.body.item);
    resPost.redirect("/");
  }
});

app.get("/work", (reqWork, resWork) => {
  let work = "work list";
  resWork.render("list", {
    fullDate: date(),
    listItem: work,
    newItem: worklist,
  });
});

app.post("/work", (reqWork, resWork) => {
  worklist.push(reqWork.body.item);
  resWork.redirect("/work");
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});

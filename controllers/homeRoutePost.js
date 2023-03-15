const thingsToDo = require("../models/userSchema");

module.exports = async (req, res) => {
  // work list
//   if (req.body.list === "Lists") {
//     var store = req.body.item;
//     const item = new thingsToDo({
//       name: store,
//       type: "lists",
//     });
//     item.save();
//     res.redirect("/");
//   }
  // food list
    if (req.body.list === "Daily meal list") {
    var store = req.body.item;
    const item = new thingsToDo({
      name: store,
      type: "food list",
    });
    item.save();
    res.redirect("/food");
  }
  // lists
  else if (req.body.list === "Work to do") {
    var store = req.body.item;

    const item = new thingsToDo({
      name: store,
      type: "Work list",
    });

    item.save();
    res.redirect("/work");
  }
  //exercise list
  else if(req.body.list === "Exercise to do"){
    var store = req.body.item;
    const item = new thingsToDo({
      name: store,
      type: "exercise list",
    });
    item.save();
    res.redirect("/exercise");
  }
};

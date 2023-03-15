const thingsToDo = require("../models/userSchema");
const date = require("../date");

// const list1 = new thingsToDo({
//   name: "1. Daily meal list",
//   type: "lists",
// });

// const list2 = new thingsToDo({
//   name: "2. Work to do",
//   type: "lists",
// });

// const list3 = new thingsToDo({
//   name: "3. Physical exercises to do",
//   type: "lists",
// });

const Item1 = new thingsToDo({
  name: "Apple",
  type: "food list",
});

const Item2 = new thingsToDo({
  name: "Mango",
  type: "food list",
});

const Item3 = new thingsToDo({
  name: "Rice with daal",
  type: "food list",
});

const work1 = new thingsToDo({
  name: "Homework",
  type: "Work list",
});

const work2 = new thingsToDo({
  name: "DSA",
  type: "Work list",
});
const work3 = new thingsToDo({
  name: "WEBDEV",
  type: "Work list",
});

const ex1 = new thingsToDo({
  name: "Running",
  type: "exercise list",
});

const ex2 = new thingsToDo({
  name: "Pranayam",
  type: "exercise list",
});


module.exports = async(req, res)=> {
    const toDo = "To-Do List";
    nameOfListItems = ["Daily Meal list", "Work to do", "Physical exercise list"];
    // finding
    thingsToDo.find((err, foundItem) => {
      if (err) {
        console.log(err);
      } else {
        if (foundItem.length === 0) {
          const itemArray = [
            Item1,
            Item2,
            Item3,
            work1,
            work2,
            work3,
            ex1,
            ex2,
          ];

          const inserted = thingsToDo.insertMany(itemArray, (err) => {
            console.log(err);
          });
          console.log(inserted);
        
          res.redirect();
        } else {
            res.render("home", {
            fullDate: date(),
            listItem: toDo,
            newItem: nameOfListItems,
          });
        }
      }
    });
};

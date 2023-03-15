const thingsToDo = require("../models/userSchema");
const date = require("../date");

module.exports = async(req, res)=>{
    // const food = "Daily meal";

    // thingsToDo.find({ type: "fruits" }, (err, foundItem) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     if (foundItem.length === 0) {
    //       const itemArray = [
    //         Item1,
    //         Item2,
    //         Item3,
    //         work1,
    //         work2,
    //         work3,
    //         ex1,
    //         ex2,
    //       ];
    //       thingsToDo.insertMany(itemArray, (err) => {
    //         console.log(err);
    //       });
    //       res.redirect();
    //     } else {
    //       res.render("list", {
    //         fullDate: date(),
    //         listItem: food,
    //         newItem: foundItem,
    //       });
    //     }
    //   }
    // });
          let food = "Daily meal list";

          thingsToDo.find({ type: "food list" }, (err, founditems) => {
            if (err) {
              console.log(err);
            } else {
              res.render("list", {
                fullDate: date(),
                listItem: food,
                newItem: founditems,
              });
            }
          });
}
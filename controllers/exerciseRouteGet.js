const thingsToDo = require("../models/userSchema");
const date = require("../date");

module.exports = async(req, res)=>{
      const exercise = "Exercise to do";
      thingsToDo.find({ type: "exercise list" }, (err, founditems) => {
        if (err) {
          console.log(err);
        } else {
          res.render("list", {
            fullDate: date(),
            listItem: exercise,
            newItem: founditems,
          });
        }
      });
}
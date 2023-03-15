const thingsToDo = require("../models/userSchema");
const date = require("../date");

module.exports = async(req, res)=>{
      let work = "Work to do";

      thingsToDo.find({ type: "Work list" }, (err, founditems) => {
        if (err) {
          console.log(err);
        } else {
          res.render("list", {
            fullDate: date(),
            listItem: work,
            newItem: founditems,
          });
        }
      });
}
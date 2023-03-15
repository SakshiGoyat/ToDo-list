const thingsToDo = require("../models/userSchema");

module.exports = async(req, res)=>{
    const itemName = req.body.checkbox;
    thingsToDo.findByIdAndRemove(itemName, (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.redirect("/");
}
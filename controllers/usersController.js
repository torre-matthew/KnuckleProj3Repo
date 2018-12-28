const db = require("../db/models");

let findUsersSavedRecipes = (req, res) => {
    db.Users.findOne({"googleId": req.params.id}, "savedRecipes")
    .then(data => res.json(data))
    .catch(err => console.log(err));
}


// Defining methods for the usersController
module.exports = {
    usersSavedRecipes: findUsersSavedRecipes,
  
};
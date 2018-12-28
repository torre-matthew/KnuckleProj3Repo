const db = require("../db/models");

// This function takes the googleId from the api get request and queries the db to look for the Users collection that
// matches that google Id. Return the savedRecipes array when found.
let findUsersSavedRecipes = (req, res) => {
    db.Users.findOne({"googleId": req.body.googleId}, "savedRecipes")
    .then(data => res.json(data))
    .catch(err => console.log(err));
}


// Defining methods for the usersController
module.exports = {
    usersSavedRecipes: findUsersSavedRecipes,
  
};
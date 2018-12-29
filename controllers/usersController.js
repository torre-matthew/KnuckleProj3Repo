const db = require("../db/models");

// This function takes the googleId from the api get request and queries the db to look for the Users collection that
// matches that google Id. Return the savedRecipes array when found.
let findUsersSavedRecipes = (req, res) => {
    db.Users.findOne({"googleId": req.body.googleId}, "savedRecipes")
    .then(data => res.json(data))
    .catch(err => console.log(err));
}


let associateSavedRecipesToUser = (req, res) => {
    //Associate Associaate the meatloaf dish to Quy's user.
    db.SavedRecipes.find({"recipeID": req.body.recipeID})
    .then(data => {
    //Update Quy's record to include a new saved recipe
        // res.json(data);
        db.Users.findOneAndUpdate({"googleId": req.body.googleID}, {$push: {savedRecipes: data[0]._id}})
        .then(updatedUserRecord => {
            res.json(updatedUserRecord);
        })
        .catch(err => {
            console.error(err);   
        });
    })
    .catch(err => {
        console.error(err);
    });
    
}


// Defining methods for the usersController
module.exports = {
    usersSavedRecipes: findUsersSavedRecipes,
    saveARecipe: associateSavedRecipesToUser
  
};
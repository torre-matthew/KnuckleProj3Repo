const db = require("../db/models");

// This function takes the googleId from the api get request and queries the db to look for the Users collection that
// matches that google Id. Return the savedRecipes array when found.
let findUsersSavedRecipes = (req, res) => {
    db.Users.findOne({"googleId": req.body.googleId}, "savedRecipes")
    .then(data => res.json(data))
    .catch(err => console.log(err));
}


let associateSavedRecipesToUser = (req, res) => {
// Look for the saved recipe that has the recipeID that we store from the Edemam API of the recipe the user is saving.
    db.SavedRecipes.find({"recipeID": req.body.recipeID})
    .then(data => {
// Then lookup the user based on the stored googleID and push the mongodb id of that recipe into the savedRecipes array of that user.
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
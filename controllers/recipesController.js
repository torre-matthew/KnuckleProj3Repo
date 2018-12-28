const db = require("../db/models");

//This function takes in a request body with name, image, and recipeID, and then
//inserts a new recipe into the savedRecipes collection
let saveRecipe = (req, res) => {
    db.SavedRecipes.create( { name: req.body.name, image: req.body.image, recipeID: req.body.recipeID} )
    .then(data => res.json(data))
    .catch(err => console.log(err));
}


// Defining methods for the recipesController
module.exports = {
    saveRecipe:saveRecipe
};
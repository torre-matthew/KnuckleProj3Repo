const db = require("../db/models");

//This function takes in a request body with name, image, and recipeID, and then
//inserts a new recipe into the savedRecipes collection
let saveRecipe = (req, res) => {
    db.SavedRecipes.create( { name: req.body.name, image: req.body.image, recipeID: req.body.recipeID} )
    .then(data => res.json(data))
    .catch(err => console.log(err));
}

let getSavedRecipeByObjID = (req, res) => {
    db.SavedRecipes.find({"_id": {$in: req.params.savedRecipes}})
    .then(data => {
        res.json(data) 
    })
    .catch(err => {
        console.error(err);
    });
}

//This function takes in a request body with recipeID, and then
//removes it from the DB
let deleteRecipeByID = (req, res) => {
    db.SavedRecipes.remove( { recipeID: req.body.recipeID } )
    .then(data => res.json(data))
    .catch(err => console.log(err));
}

//This function takes in the recipeID and googleID of the user, and searches 
//the recipes DB for the recipe to be deleted, it then takes it's database ID
//(not recipeID) and deletes the corresponding array element in the savedRecipes
//array of the user, which is found by googleID. (THANKS TORRE)
let deleteRecipeFromUserArray = (req, res) => {
    
        db.Users.findOneAndUpdate({"email": req.body.email}, {$pull: {savedRecipes: req.body.id}})
        .then(updatedUserRecord => {
            res.json(updatedUserRecord);
        })
        .catch(err => {
            console.error(err);   
        });   
}

// Defining methods for the recipesController
module.exports = {
    saveRecipe:saveRecipe,
    getSavedRecipe: getSavedRecipeByObjID,
    deleteRecipeByID:deleteRecipeByID,
    deleteUserRecipe: deleteRecipeFromUserArray
};
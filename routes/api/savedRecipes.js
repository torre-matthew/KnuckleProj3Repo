const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// Matches with "/api/savedrecipe"
// Posts a new recipe name, image, and recipeID to the DB
router.route("/")
  .post(recipesController.saveRecipe); 

// Matches with "/api/savedrecipe/delete-recipe"
// Deletes a recipe from the DB given the recipeID
router.route("/delete-recipe")
  .delete(recipesController.deleteRecipeByID);

// Matches with "/api/savedrecipe/delete-user-recipe"
// Deletes a recipe from the savedRecipes array of a user,
// given googleID and recipeID
router.route("/delete-user-recipe")
  .delete(recipesController.deleteUserRecipe);

module.exports = router;

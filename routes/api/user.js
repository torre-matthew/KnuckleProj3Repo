const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user/saved-recipes"
router.route("/saved-recipes")
// Get all savedRecipes based on the googleID of user. GoogleId should be unique so this should be safe.
// endpoint looks like: /api/user/saved-recipes
  .get(usersController.usersSavedRecipes);
  
router.route("/savingrecipe")
// This endpoint is looking for a request body that contains a recipeID from the savedRecipes collection..
// as well as a googleId from the users collection.
// From there, that recipe is added to that users list of savedRecipes in that users record in the users collection.
// endpoint looks like: /api/user/savingrecipe
  .put(usersController.saveARecipe);


// Matches with "/api/user/:id"
router
  .route("/:id")
// .get(usersController.findAll);---EXAMPLE---       

module.exports = router;
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
// Matches with: /api/user/savingrecipe
  .put(usersController.saveARecipe);

router.route("/create-user")
// create a new user in the db
// Matches with: /api/user/create-user
  .post(usersController.createUser);

router.route("/get-user")
// returns user information based on googleID
// Matches with: /api/user/get-user
  .get(usersController.getUser);
module.exports = router;
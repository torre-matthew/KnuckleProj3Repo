const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user/saved-recipes"
router.route("/:googleId")
// Get all savedRecipes based on the googleID of user. GoogleId should be unique so this should be safe.
// endpoint looks like: /api/user/############
  .get(usersController.usersSavedRecipes);

  router.route("/")
// Get all users
// endpoint looks like: /api/user
  .get(usersController.getAllUsers);
  
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
       
module.exports = router;
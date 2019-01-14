const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/saved-recipes/:googleId")
// Get all savedRecipes based on the googleID of user. GoogleId should be unique so this should be safe.
// endpoint looks like: /api/user/saved-recipes/############
  .get(usersController.usersSavedRecipes);

router.route("/all")
// Get all users
// endpoint looks like: /api/user/all
  .get(usersController.getAllUsers);


router.route("/:googleId")
// returns user information based on googleID
// Matches with: /api/user/###############
  .get(usersController.getUser);
  

  router.route("/savingrecipe")
// This endpoint is looking for a request body that contains a recipeID from the savedRecipes collection..
// as well as an email from the users collection.
// From there, that recipe is added to that users list of savedRecipes in that users record in the users collection.
// Matches with: /api/user/savingrecipe
  .put(usersController.associateSavedRecipesToUser);


router.route("/create-user")
// create a new user in the db
// Matches with: /api/user/create-user
  .post(usersController.createUser);





module.exports = router;
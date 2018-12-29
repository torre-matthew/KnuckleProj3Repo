const router = require("express").Router();
const usersController = require("../../controllers/usersController");


router.route("/saved-recipes")
// Get all savedRecipes based on the googleID of user. GoogleId should be unique so this should be safe.
// endpoint looks like: /api/user/saved-recipes
  .get(usersController.usersSavedRecipes);
  
router.route("/saverecipe")
    .get(usersController.saveARecipe);


// Matches with "/api/savedRecipes/:id"
router
  .route("/:id")
// .get(usersController.findAll);---EXAMPLE---       

module.exports = router;
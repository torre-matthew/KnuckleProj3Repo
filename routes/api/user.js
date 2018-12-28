const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/savedRecipes"
router.route("/")
// .get(usersController.findAll);---EXAMPLE---

// Matches with "/api/savedRecipes/:id"
router
  .route("/:id")
    .get(usersController.usersSavedRecipes);
//   

module.exports = router;
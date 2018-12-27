const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// Matches with "/api/savedRecipes"
router.route("/")
//   .get(recipesController.findAll);---EXAMPLE---

// Matches with "/api/savedRecipes/:id"
router
  .route("/:id")
//   .get(recipesController.findAll);---EXAMPLE---

module.exports = router;

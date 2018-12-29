const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// Matches with "/api/savedrecipe"
router.route("/")
    .post(recipesController.saveRecipe); 

// Matches with "/api/savedrecipe/:id"
router
  .route("/:id")
//   .get(recipesController.findAll);---EXAMPLE---

module.exports = router;

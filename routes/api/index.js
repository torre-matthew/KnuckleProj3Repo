const router = require("express").Router();
const userRoutes = require("./user");
const recipeRoutes = require("./savedRecipes");

// Routes
router.use("/user", userRoutes);
router.use("/savedRecipe", recipeRoutes);

module.exports = router;
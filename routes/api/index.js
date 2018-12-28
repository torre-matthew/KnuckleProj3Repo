const router = require("express").Router();
const userRoutes = require("./user");
const recipeRoutes = require("./savedRecipes");

// Routes
router.use("/user", userRoutes);
router.use("/savedrecipe", recipeRoutes);

module.exports = router;
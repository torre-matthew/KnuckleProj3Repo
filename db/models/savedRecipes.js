let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let SavedRecipesSchema = new Schema({
  name: String,
  image: String,
  recipeID: String
});

// This creates our model from the above schema, using mongoose's model method
let SavedRecipes = mongoose.model("SavedRecipes", SavedRecipesSchema);

// Export the Note model
module.exports = SavedRecipes;
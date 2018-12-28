let mongoose = require("mongoose");

// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
let UserSchema = new Schema({
  name: {
    type: String
  },
  
  googleId: {
    type: String,
    unique: true
  },

  imageUrl: {
    type: String
  },

  email: {
    type: String
  },
  // `savedRecipes` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the SavedRecipes model
  // This allows us to populate the User with any associated Saved Recipes
  
  savedRecipes: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the savedRecipes model
      ref: "SavedRecipes"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
let Users = mongoose.model("Users", UserSchema);

// Export the User model
module.exports = Users;
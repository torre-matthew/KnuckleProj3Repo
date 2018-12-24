let mongoose = require("mongoose");

// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
let UserSchema = new Schema({
  // `name` must be unique and of type String
  name: {
    type: String
  },
  
  googleID: {
    type: String,
    unique: true
  },

  profilePic: {
    type: String
  },
  // `notes` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Note model
  // This allows us to populate the User with any associated Notes
  savedRecipes: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "SavedRecipe"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
let User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
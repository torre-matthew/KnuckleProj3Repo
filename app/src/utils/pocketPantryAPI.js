import axios from "axios";


//Methods for using the Pocket Pantry API

let getUsersSavedRecipes = (googleId) => {
  return axios.get('/api/user/saved-recipes/' + googleId);
}

let getUserRecord = (googleId) => {
  return axios.get('/api/user/' + googleId);
}

let getSavedRecipeDetails = (objID) => {
  return axios.get('/api/savedRecipe/' + objID);
}

let createUser = (name, googleId, imageUrl, email) => {
  return axios.post('/api/user/create-user', {
      name: name,
      googleId: googleId,
      imageUrl: imageUrl,
      email: email
  });
}

let associateRecipeToUser = (email, recipeID) => {
  return axios.put('/api/user/savingrecipe', {
      email: email,
      recipeID: recipeID
  });
}

export default {
//Get Saved Recipes for a user based on googleId:
// On the front-end just pass this method a googleId like this...PPAPI.getUsersSavedRecipes(googleId)
    getUsersSavedRecipes: getUsersSavedRecipes,
//Create a User in the db
// On the front-end just pass this method a name, googleId, imageUrl, and email like this... PPAPI.createUser(name, googleId, imageUrl, email)
    createUser: createUser,
//Get a single Users Record from the db
// On the front-end just pass this method googleId like this... PPAPI.getUserRecord(googleId)
    getUserRecord: getUserRecord,

//Get details of a saved recipe from the db by objID
// On the front-end just pass this method an objID like this... PPAPI.getSavedRecipeDetails(objID)
    getSavedRecipeDetails: getSavedRecipeDetails,
    
// On the front-end just pass this method an objID like this... PPAPI.associateSavedRecipeToUser(email, recipeID)
    associateSavedRecipeToUser: associateRecipeToUser
  };
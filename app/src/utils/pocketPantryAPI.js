import axios from "axios";


let getUsersSavedRecipes = (googleId) => {
  axios.get('/api/user/' + googleId)
  .then(function(response) {
    console.log(response);
  });
}

let createUser = (name, googleId, imageUrl, email) => {
  axios.post('/api/user/create-user', {
      name: name,
      googleId: googleId,
      imageUrl: imageUrl,
      email: email
  })
  .then(function(response) {
    console.log(response);
  });
}

export default {
    getUsersSavedRecipes: getUsersSavedRecipes,
    saveARecipe:[],
    createUser: createUser
  };
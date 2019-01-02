import axios from "axios";


let getUsersSavedRecipes = (googleId) => {

    axios({
        method:'get',
        url:'/saved-recipes',
        body: {
            googleId: googleId
        }
      })
        .then(function(response) {
        console.log(response);
      });

} 

export default {
    getUsersSavedRecipes: getUsersSavedRecipes,
    saveARecipe:[],
    createUser: []
  };
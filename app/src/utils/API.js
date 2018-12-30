import axios from "axios";
const BASEURL = "https://api.edamam.com/search?q=";
const APIKEY = "&app_key=e110d557a91aacde45b67d166fff1374";
const appID = "&app_id=82a2955b";
const BASEURI = "https://api.edamam.com/search?r="
const URI = "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_"
export default {
  search: function(query) {
    return axios.get(BASEURL + query + appID + APIKEY);
  },
  seachByID: function(id){
    return axios.get(BASEURI + URI + id + appID + APIKEY);
  },
  saveRecipe: function(recipe){
    return axios.post("/api/savedRecipe", recipe)
  },
  deleteRecipe: function(recipeID){
    return axios.delete("/api/savedRecipe/delete-recipe",recipeID);
  },
  deleteUserRecipe: function(googleAndRecipeID){
    return axios.delete("/api/savedRecipe/delete-user-recipe", googleAndRecipeID);
  }
};
import axios from "axios";
const BASEURL = "https://api.edamam.com/search?q=";
const APIKEY = "&app_key=d6e0b07cfd2a3b315df8277fcca614c1	";
const appID = "&app_id=0f331502";
const BASEURI = "https://api.edamam.com/search?r="
const URI = "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_"
export default {
  search: function(query) {
    return axios.get(BASEURL + query + appID + APIKEY);
  },
  searchByID: function(recipeID){
    return axios.get(BASEURI + URI + recipeID + appID + APIKEY);
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

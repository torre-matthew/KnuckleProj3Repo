import axios from "axios";
const BASEURL = "https://api.edamam.com/search?q=";
const APIKEY = "&app_key=f8fad82d02637a25041c566779911770";
const appID = "&app_id=c83ee7c9";
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
    return axios.post("/api/savedRecipes", recipe)
  }
};
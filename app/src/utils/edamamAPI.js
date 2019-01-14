import axios from "axios";
const BASEURL = "https://api.edamam.com/search?q=";
const APIKEY = "&app_key=65033b2b4f6a801dbc09095ea691ea1d";
const appID = "&app_id=d25d0095";
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
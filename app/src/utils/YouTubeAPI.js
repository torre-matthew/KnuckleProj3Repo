import axios from "axios";

const BASEURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
const APIKEY = "&type=video&videoCaption=closedCaption&maxResults=10&key=AIzaSyAson-jfu7sHopOIhJ3NGOqJI-khuXm4-M";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
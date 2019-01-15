window.onload = function() {

 
  let allTheMeals = sessionStorage.getItem("un");

  if(allTheMeals != null) {
    document.getElementById("pp-all-meals").style.display = "block";
  } else {
    document.getElementById("pp-all-meals").style.display = "none";
  }
} // window.onload

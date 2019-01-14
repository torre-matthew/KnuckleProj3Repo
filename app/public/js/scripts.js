window.onload = function() {

 
  let allTheMeals = sessionStorage.getItem("un");

  if(allTheMeals != null) {
    document.getElementById("pp-all-meals").style.display = "block";
  } else {
    document.getElementById("pp-all-meals").style.display = "none";
  }

  // grow and shrink logo on fixed nav
  window.onscroll = function() {
    sizeLogo();
  }

  function sizeLogo() {
    var logo = document.getElementById("logo");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      logo.style.width = "100px";
      logo.style.filter = "drop-shadow(0px 0px 10px #ff4301)";
    } else {
      logo.style.width = "200px";
      logo.style.filter = "drop-shadow(0px 0px 10px rgba(0,0,0,.7))";
    }
  }


} // window.onload
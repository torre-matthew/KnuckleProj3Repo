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
  var x = 1;
  function sizeLogo() {
    var logo = document.getElementById("logo");
    var elem = document.querySelector('.App-logo');
    
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
     
      logo.style.width = "90px";
      logo.style.filter = "drop-shadow(0px 0px 10px #ff4301)";

      if (x === 1) {
      elem.animate([
        {
          transform: 'translateY(200px) scaleY(2.5) scaleX(.2)',
          transformOrigin: '50% 0',
          filter: 'blur(40px)',
          opacity: 0
        },
        {
          transform: 'translateY(0) scaleY(1) scaleX(1)',
          transformOrigin: '50% 50%',
          filter: 'blur(0)',
          opacity: 1
        }
      ], 1000);
      x = 0;
      
      }
     
    } else {
      logo.style.width = "200px";
      logo.style.filter = "drop-shadow(0px 0px 10px rgba(0,0,0,.7))";
      x = 1;
    }
  }

  
  
} // window.onload

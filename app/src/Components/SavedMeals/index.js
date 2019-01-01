import React, { Component } from "react";
import "./style.css";

class ToggleFavorite extends Component {
  toggleFavorite() {
    let element = document.getElementById("pp-smHeart");
    
    console.log(element);
  }

render() {
  return <span className="pp-sm-favme" onClick={this.toggleFavorite}><i id="pp-smHeart" className="fa fa-heart"></i></span>
}

}
function SavedMeals() {
  return(
    <div className="container pp-saved-meals">
      <div className="row">
        <div className="col s12 center">
          <h1>David Chang's saved meals</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <ToggleFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=1" alt="random dish of food" />
          </div>
        </div>
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <ToggleFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=2" alt="random dish of food" />
          </div>
        </div>
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <ToggleFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=3" alt="random dish of food" />
          </div>
        </div>
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <ToggleFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=4" alt="random dish of food" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <ToggleFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=5" alt="random dish of food" />
          </div>
        </div>
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <ToggleFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=6" alt="random dish of food" />
          </div>
        </div>
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <ToggleFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=7" alt="random dish of food" />
          </div>
        </div>
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <ToggleFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=8" alt="random dish of food" />
          </div>
        </div>
      </div>
    </div>

  )
  
}

export default SavedMeals;
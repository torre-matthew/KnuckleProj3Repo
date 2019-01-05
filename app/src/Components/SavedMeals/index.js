import React, { Component } from "react";
import "./style.css";

class SaveFavorite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      status: !this.state.status
    })
  }
  render() {
    return (
      <SaveFavoriteChild className={this.state.status ? "far fa-heart pp-sm-heart" : "fas fa-heart pp-sm-heart"} toggleClassName={this.handleClick}></SaveFavoriteChild>
    )
  }
}

class SaveFavoriteChild extends React.Component {
  render() {
    return (
      <span className="pp-sm-favme">
        <i className={this.props.className}
          onClick={this.props.toggleClassName}
        >
          {this.props.children}
        </i></span>
    )
  }
}

var yourName = sessionStorage.getItem("un");
if (yourName == null) {
  yourName = "Guest";
}

function SavedMeals() {
  return(
    <div className="container pp-saved-meals">
      <div className="row">
        <div className="col s12 center">
          <h1>{yourName+"'s"} saved meals</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <SaveFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=1" alt="random dish of food" />
            <div className="pp-sm-recipe-fav-link">
              <a href="/">See Recipe</a>
            </div>
          </div>
        </div>
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <SaveFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=2" alt="random dish of food" />
            <div className="pp-sm-recipe-fav-link">
              <a href="/">See Recipe</a>
            </div>
          </div>
        </div>
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <SaveFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=3" alt="random dish of food" />
            <div className="pp-sm-recipe-fav-link">
              <a href="/">See Recipe</a>
            </div>
          </div>
        </div>
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <SaveFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=4" alt="random dish of food" />
            <div className="pp-sm-recipe-fav-link">
              <a href="/">See Recipe</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <SaveFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=5" alt="random dish of food" />
            <div className="pp-sm-recipe-fav-link">
              <a href="/">See Recipe</a>
            </div>
          </div>
        </div>
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <SaveFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=6" alt="random dish of food" />
            <div className="pp-sm-recipe-fav-link">
              <a href="/">See Recipe</a>
            </div>
          </div>
        </div>
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <SaveFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=7" alt="random dish of food" />
            <div className="pp-sm-recipe-fav-link">
              <a href="/">See Recipe</a>
            </div>
          </div>
        </div>
        <div className="col s12 m3 pp-sm-recipe">
          <div className="pp-sm-recipe-fav">
            <div className="pp-sm-fav-btn">
              <SaveFavorite />
            </div>
            <img src="https://loremflickr.com/320/320/food?random=8" alt="random dish of food" />
            <div className="pp-sm-recipe-fav-link">
              <a href="/">See Recipe</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
  
}

export default SavedMeals;
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
      <SaveFavoriteChild 
      className={this.state.status ? "far fa-heart pp-sm-heart" : "fas fa-heart pp-sm-heart"} 
      toggleClassName={this.handleClick} 
      />
    )
  }
}

class SaveFavoriteChild extends React.Component {
  render() {
    return (
      <span className="pp-sm-favme">
        <i 
          className={this.props.className}
          onClick={this.props.toggleClassName} 
        />
          {this.props.children}
        </span>
    )
  }
}

var yourName = sessionStorage.getItem("un");
if (yourName == null) {
  yourName = "Guest";
}


class SavedMeals extends React.Component {
state = {
  savedRecipes: []
  }

componentDidMount() {
  this.getSavedRecipesFromSessionStorage();
}

getSavedRecipesFromSessionStorage = () => {
  let recipesObj = JSON.parse(sessionStorage.getItem("savedRecipes"));
  console.log(recipesObj);

  if (recipesObj != null) {
    this.setState({
      savedRecipes: recipesObj
    });
  }
}



  render() {
    return(
      <div id="pp-all-meals" className="container pp-saved-meals">
        <div className="row">
          <div className="col s12 center">
            <h1>{yourName+"'s"} saved meals</h1>
          </div>
        </div>
        <div className="row">
        {this.state.savedRecipes.map(recipes => (
          <div className="col s12 m3 pp-sm-recipe">
            <div className="pp-sm-recipe-fav">
              <div className="pp-sm-fav-btn">
                <SaveFavorite />
              </div>
              <img src={recipes.image} alt="random dish of food" />
              <div className="pp-sm-recipe-fav-link">
                <a href="/">See Recipe</a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    )
  }
}



export default SavedMeals;
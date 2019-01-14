import React, { Component } from "react";
import API from "../../utils/API";
import FoodDetails from "../FoodDetails";
import Video from "../Video";
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
  savedRecipes: [],
  sectionMessage: "You have no saved recipes",
  yourName:"",
  showRecipeIngredients: false,
  recipeIngredients:[],
  healthLabels:[],
  youtubeSearchName:[]
  }

componentDidMount() {
  this.getSavedRecipesFromSessionStorage();
}

getSavedRecipesFromSessionStorage = () => {
  let recipesObj = JSON.parse(sessionStorage.getItem("savedRecipes"));
  console.log(recipesObj);

  if (recipesObj != null) {
    this.setState({
      savedRecipes: recipesObj,
      yourName: sessionStorage.getItem("un"),
      sectionMessage: yourName + " 's Saved Recipes"
    });
  }
}

//This function searches the Edamam API for the SPECIFIC recipe clicked by the user,
//and returns only that recipe's information, and updates our states with this information.
//State recipeIngredients contains all the ingredients for the recipe
//State youtubeSearchName contains the name for the recipe.
showRecipe = (recipeID) => {
  console.log(recipeID);
  this.setState({
    showRecipeIngredients:true,
    recipeIngredients:[],
    youtubeSearchName:[]
  });
  API.searchByID(recipeID)
    .then(res => {
      this.setState({
        recipeIngredients:res.data[0].ingredientLines,
        healthLabels:res.data[0].healthLabels,
        youtubeSearchName:res.data[0].label
      })
      console.log(res);
      console.log("this is the State recipeIngredients: " + this.state.recipeIngredients);
      console.log("this is the State youtubeSearchName: " + this.state.youtubeSearchName);
    })
    .catch(err => console.log(err))
}



  render() {
    return(
      <div>
      <div id="pp-all-meals" className="container pp-saved-meals">
        <div className="row">
          <div className="col s12 center">
            <h1>{this.state.sectionMessage}</h1>
          </div>
        </div>
        <div className="row">
        {this.state.savedRecipes.map(recipes => (
          <div className="col s12 m3 pp-sm-recipe">
            <div className="pp-sm-recipe-fav">
              <div className="pp-sm-fav-btn">
                <SaveFavorite />
              </div>
              <a href="#recipe-area"><img src={recipes.image} data-recipeID={recipes.recipeID} alt={recipes.name} onClick={() => this.showRecipe(recipes.recipeID)}/></a>
              <div className="pp-sm-recipe-fav-link">
              <a href="">See Recipe</a>
              </div>
            </div>
          </div>
          ))}
        </div>       
      </div>
      {this.state.showRecipeIngredients ? 
        (<div>
        <FoodDetails
          name={this.state.youtubeSearchName}
          listOfIngredients={this.state.recipeIngredients}
          healthLabels={this.state.healthLabels}
        />
        <Video
        youtubeSearchName={this.state.youtubeSearchName} 
        />
        </div>) : 
        ""}
      </div>
      
    )
  }
}



export default SavedMeals;
import React, { Component } from "react";
import API from "../../utils/API";
import FoodDetails from "../FoodDetails";
import Video from "../Video";
import "./style.css";
import PPAPI from "../../utils/pocketPantryAPI";
import SideNav from "react-materialize/lib/SideNav";

class SaveFavorite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      status: !this.state.status
    })

    console.log(this.state.status); // this is consoling true/false when heart is clicked
    let targetId = document.getElementById("recipeIdElem");
    let id = targetId.getAttribute("data-recipeid-delete")
    let email = sessionStorage.getItem("em");

    if (this.state.status === false) {
      PPAPI.deleteRecipeFromUserRecord(email, id)
        .then (response => {
        })
        .catch(err => {
          console.error(err);   
      });
    } else 
     console.log("not deleting");  
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
  calories:[],
  totalTime:[],
  healthLabels:[],
  dietLabel:[],
  cautions:[],
  youtubeSearchName:''
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
  });
  API.searchByID(recipeID)
    .then(res => {
      this.setState({
        recipeIngredients:res.data[0].ingredientLines,
        calories:res.data[0].calories,
        totalTime:res.data[0].totalTime,
        healthLabel:res.data[0].healthLabels,
        dietLabel:res.data[0].dietLabels,
        cautions:res.data[0].cautions,
        youtubeSearchName:res.data[0].label
      })
      if(res.data[0].totalTime === 0){
        this.setState({
          totalTime:["Unknown"]
        })
      }
      if(res.data[0].cautions === undefined){
        this.setState({
          cautions:["None"]
        })
      }
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
              <a href="#saved-recipe-area"><img id="recipeIdElem" src={recipes.image} data-recipeid-delete={recipes._id} alt={recipes.name} onClick={() => this.showRecipe(recipes.recipeID)}/></a>
              <div className="pp-sm-recipe-fav-link">
              <a href="#saved-recipe-area" onClick={() => this.showRecipe(recipes.recipeID)}>{recipes.name}</a>
              </div>
            </div>
          </div>
          ))}
        </div>       
      </div>
      {this.state.showRecipeIngredients && this.state.youtubeSearchName !== '' ? 
        (<div>
        <FoodDetails
          healthLabels={this.state.healthLabels}
          listOfIngredients={this.state.recipeIngredients}
          name={this.state.youtubeSearchName}
          calories={this.state.calories}
          totalTime={this.state.totalTime}
          dietLabel={this.state.dietLabel}
          cautions={this.state.cautions}
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
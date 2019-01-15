import React, { Component }  from "react";
import Button from "react-materialize/lib/Button";
import "./style.css";
import API from "../../utils/API";
import {FoodDisplay, FoodDisplayCard} from "../FoodDisplay";
import Video from "../Video";
import FoodDetails from "../FoodDetails"
import Modal from "../Modal";
// import FoodDisplayCard from "../FoodDisplay";

class ListOfingredients extends Component {
  
  state = {
    ingredients: [""],
    recipes:[],
    showComponent:false,
    showRecipeIngredients: false,
    recipeIngredients:[],
    calories:[],
    totalTime:[],
    healthLabel:[],
    dietLabel:[],
    youtubeSearchName:[],
    cautions:[],
    href:[],
    status:false
  }

  handleText = i => e => {
    let ingredients = [...this.state.ingredients]
    ingredients[i] = e.target.value
    this.setState({
      ingredients
    })
    console.log(ingredients);
  }

  handleDelete = i => e => {
    e.preventDefault()
    let ingredients = [
      ...this.state.ingredients.slice(0, i),
      ...this.state.ingredients.slice(i + 1)
    ]
    this.setState({
      ingredients
    })

  }

  addIngredient = e => {
    e.preventDefault()
    let ingredients = this.state.ingredients.concat([''])
    this.setState({
      ingredients
    })
  }

  handleClose = () => {
    this.setState({
      status: !this.state.status
    })
  }

  //This is an onClick function for the search button that queries the Edamam API with the ingredients
  //that the user types in. The recipes will be saved in the state array "recipes", and this state is
  //cleared every time a new search happens. 
  //
  //Referencing the recipes array example:
  //this.state.recipes.recipe.image for image. 
  searchEdamam = event => {
    event.preventDefault();
    this.setState({
      showComponent: true,
      showRecipeIngredients:false,
      recipes:[],
      recipeIngredients:[],
      calories:[],
      totalTime:[],
      healthLabel:[],
      dietLabel:[],
      youtubeSearchName:[],
      cautions:[],
      href:[]
    });
    let queryString = this.state.ingredients;
    API.search(queryString)
      .then(res => {
        this.setState({recipes:res.data.hits});
        console.log(this.state.recipes);
        //res.data.hits[0].recipe.image
        //res.data.hits[0].recipe.uri
        //res.data.hits[0].recipe.url
        //res.data.hits[0].recipe.label
      })
      .catch(err => console.log(err))
    console.log(queryString);
  }

//This function searches the Edamam API for the SPECIFIC recipe clicked by the user,
//and returns only that recipe's information, and updates our states with this information.
//State recipeIngredients contains all the ingredients for the recipe
//State youtubeSearchName contains the name for the recipe.
  showRecipe = (recipeID) => {
    console.log(recipeID);
    let array = recipeID.split("_");
    recipeID = array[1];
    console.log(recipeID);
    this.setState({
      showRecipeIngredients:true,
      recipeIngredients:[],
      calories:[],
      totalTime:[],
      healthLabel:[],
      dietLabel:[],
      youtubeSearchName:[],
      cautions:[],
      href:[]
    });
    API.searchByID(recipeID)
      .then(res => {
        this.setState({
          recipeIngredients:res.data[0].ingredientLines,
          youtubeSearchName:res.data[0].label,
          calories:res.data[0].calories,
          totalTime:res.data[0].totalTime,
          healthLabel:res.data[0].healthLabels,
          dietLabel:res.data[0].dietLabels,
          cautions:res.data[0].cautions,
          href:res.data[0].url
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
        console.log("this is the State recipeIngredients: " + this.state.recipeIngredients);
        console.log("this is the State youtubeSearchName: " + this.state.youtubeSearchName);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div className="pp-foh-list row container">
          <div className="col s12 m6">
          <ul className="pp-foh-items">
          {this.state.ingredients.map((ingredient, index) => (
            <li key={index}>
              <input
                type="text"
                className="pp-foh-text"
                onChange={this.handleText(index)}
                value={ingredient}
              />
              <button id="del" className="pp-foh-remove pp-red" onClick={this.handleDelete(index)}><i className="tiny material-icons">close</i></button>
            </li>
          ))}
          </ul>
          </div>
          <div className="pp-foh-controls col s12 m6">
            <Button waves='light' className="pp-red pp-foh-search" onClick={this.searchEdamam}>Search</Button>
            <button className="btn-floating pp-red pp-foh-add" onClick={this.addIngredient}><i className="material-icons">add</i></button>
          </div>
        </div>
        {!this.state.recipes.length ? (
          <div className="pp-fd">
            <div className="container">
              <div className="row">
                <div className="col s12">
                  <h1>Search to see recipes</h1>
                </div>
              </div>
              <div className="row">
              
              </div>
            </div> 
          </div>
        ) : (
          <FoodDisplay>
            {this.state.recipes.map(recipe => {
              return (
                <FoodDisplayCard
                  key={recipe.recipe.label}
                  name={recipe.recipe.label}
                  href={recipe.recipe.href}
                  image={recipe.recipe.image}
                  renderComponent={this.state.showComponent}
                  recipeID={recipe.recipe.uri}
                  showRecipe={this.showRecipe.bind(this)}
                />
              );
            })}
          </FoodDisplay>
        )}
        {this.state.showRecipeIngredients ? (
          <FoodDetails
            healthLabels={this.state.healthLabel}
            listOfIngredients={this.state.recipeIngredients}
            name={this.state.youtubeSearchName}
            calories={this.state.calories}
            totalTime={this.state.totalTime}
            dietLabel={this.state.dietLabel}
            cautions={this.state.cautions}
            href={this.state.href}
          />
        ) : 
        ""}
        
      <Modal show={this.state.status} handleClose={this.handleClose.bind()}>
        <h4>Success!</h4>
        <p>Your favorites have been updated.</p>
      </Modal>
    </div>
    )
  }
}

export default ListOfingredients;
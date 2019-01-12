import React, { Component }  from "react";
import Button from "react-materialize/lib/Button";
import "./style.css";
import API from "../../utils/API";
import {FoodDisplay, FoodDisplayCard} from "../FoodDisplay";
// import FoodDisplayCard from "../FoodDisplay";
import Video from "../Video";
class ListOfingredients extends Component {
  
  state = {
    ingredients: [""],
    recipes:[],
    showComponent:false
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
      recipes:[]
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
  
  render() {
    return (
      <div>
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
          <script></script>
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
              />
            );
          })}
        </FoodDisplay>
        )}
       {/* <Video>
         {this.state.recipes[0].recipe.label}
       </Video> */}
        
    </div>
    </div>
    )
  }
}

export default ListOfingredients;
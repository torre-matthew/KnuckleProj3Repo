import React from "react";
import "./style.css";
// import { PromiseProvider } from "mongoose";

export function RecipeIngredients(props){
  return(
    <tbody> 
      {props.recipeIngredients.map(ingredients => {
        return(
          <tr>
            <td>{ingredients.text}}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export function FoodDetails(props) {
  let renderComponent = props.showRecipeIngredients;
  if(renderComponent){
    return(
      <div className="container pp-food-details">
        <div className="row">
          <div className="col s12">
            <h1>Great! Let’s get started on a fabulous (dish name here) meal!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <table>
              <thead>
                <tr>
                  <th>Ingredients</th>
                </tr>
              </thead>
              {/* <tbody>
                <tr>
                  <td>Asparagus</td>
                </tr>
                <tr>
                  <td>Broccoli</td>
                </tr>
                <tr>
                  <td>Green Onions</td>
                </tr>
              </tbody> */}
              {props.children}
            </table>
          </div>
          <div className="col s12 m6">
            {/* <div className="card-panel white pp-recipe-card">
              <span className="card-title pp-recipe-header">Recipe</span>
              <span className="black-text pp-recipe">Preheat an oven to 425 degrees F (220 degrees C).
  Place the asparagus into a mixing bowl, and drizzle with the olive oil. Toss to coat the spears, then sprinkle with Parmesan cheese, garlic, salt, and pepper. Arrange the asparagus onto a baking sheet in a single layer.
  Bake in the preheated oven until just tender, 12 to 15 minutes depending on thickness. Sprinkle with lemon juice just before serving.
              </span>
              <div className="btn waves-effect waves-light pp-recipe-rm">Read More</div>
            </div> */}
            <table>
              <thead>
                <tr>
                  <th>Additional Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calories: {props.calories}</td>
                </tr>
                <tr>
                  <td>Total Time: {props.totalTime}</td>
                </tr>
                <tr>
                  <td>Health Labels: {props.healthLabel}</td>
                </tr>
                <tr>
                  <td>Diet Labels: {props.dietLabel}</td>
                </tr>
              </tbody>
            </table>
            <div className="btn waves-effect waves-light pp-recipe-rm">Read More</div>
          </div>

        </div>
      </div>
    )
  }
}

// export default FoodDetails;
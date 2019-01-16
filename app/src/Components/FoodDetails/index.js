import React from "react";
import "./style.css";
// import { PromiseProvider } from "mongoose";

function FoodDetails(props) {
  return(
    <div id="recipe-area saved-recipe-area" className="container pp-food-details">
      <div className="row">
        <div className="col s12">
          <h1 id="getStarted">Great! Let’s get started on a fabulous {props.name}!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m4">
          <table>
            <thead>
              <tr>
                <th>Ingredients</th>
              </tr>
            </thead>
            <tbody>
            {props.listOfIngredients.map(ingredients => (
              <tr>
                <td>{ingredients}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col s12 m4">
          <table>
            <thead>
              <tr>
                <th>Health and Diet Labels</th>
              </tr>
            </thead>
            <tbody>
            {props.healthLabels.map(healthLabels => (
              <tr>
                <td>{healthLabels}</td>
              </tr>
            ))}
            {props.dietLabel.map(dietLabels => (
              <tr>
                <td>{dietLabels}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="col s12 m4">
          <table>
            <thead>
              <tr>
                <th>Miscellaneous</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calories: {props.calories}</td>
              </tr>
              <tr>
                <td>Cook Time: {props.totalTime} Minutes</td>
              </tr>
              <tr>
                <td>Cautions: {props.cautions.map(cautions => (
              
                cautions + ", "
              
              ))}</td>
              </tr>
            </tbody>
          </table>
            <a href={props.href} className="btn waves-effect waves-light pp-recipe-rm" target="_blank">View Recipe</a>
        </div>
      </div>
    </div>
  )
}

export default FoodDetails
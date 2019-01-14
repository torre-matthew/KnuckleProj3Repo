import React from "react";
import "./style.css";

function FoodDetails(props) {
  return(
    <div id="recipe-area" className="container pp-food-details">
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
            <tbody>
            {props.listOfIngredients.map(ingredients => (
              <tr>
                <td>{ingredients}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col s12 m6">
          <div className="card-panel white pp-recipe-card">
            <span className="card-title pp-recipe-header">Health Labels</span>
            <table>
            <tbody>
            {props.healthLabels.map(healthLabels => (
              <tr>
                <td>{healthLabels}</td>
              </tr>
              ))}
            </tbody>
          </table>
            <div className="btn waves-effect waves-light pp-recipe-rm">Read More</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FoodDetails;
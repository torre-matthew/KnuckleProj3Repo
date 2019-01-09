import React from "react";
import "./style.css";

function FoodDetails() {
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
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Asparagus</td>
                <td>1/2 lb. chopped</td>
              </tr>
              <tr>
                <td>Broccoli</td>
                <td>1 Bunch chopped</td>
              </tr>
              <tr>
                <td>Green Onions</td>
                <td>3 sliced</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col s12 m6">
          <div className="card-panel white pp-recipe-card">
            <span className="card-title pp-recipe-header">Recipe</span>
            <span className="black-text pp-recipe">Preheat an oven to 425 degrees F (220 degrees C).
Place the asparagus into a mixing bowl, and drizzle with the olive oil. Toss to coat the spears, then sprinkle with Parmesan cheese, garlic, salt, and pepper. Arrange the asparagus onto a baking sheet in a single layer.
Bake in the preheated oven until just tender, 12 to 15 minutes depending on thickness. Sprinkle with lemon juice just before serving.
            </span>
            <div className="btn waves-effect waves-light pp-recipe-rm">Read More</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FoodDetails;
import React from "react";
import "./style.css";
import Row from "react-materialize/lib/Row";
import Ingredients from "../Ingredients";

function FoodOnHand() {
  return (
    <div className="container pp-foh">
      <Row>
        <h1>Hello David, Welcome to your Pocket Pantry!</h1>
        <h2>What ingredients do you have on-hand today?</h2>
      </Row>
      <Ingredients />
    </div>
  )
}

export default FoodOnHand;
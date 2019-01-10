import React from "react";
import "./style.css";
import Row from "react-materialize/lib/Row";
import Ingredients from "../Ingredients";

var yourName = sessionStorage.getItem("un");
if(yourName==null) {
  yourName = "Guest";
}

function FoodOnHand() {
  return (
    <div className="pp-foh">
      <Row className="container">
        <h1>Hello {yourName}, Welcome to your Pocket Pantry!</h1>
        <h2>What ingredients do you have on-hand today?</h2>
      </Row>
      <Ingredients />
    </div>
  )
}

export default FoodOnHand;
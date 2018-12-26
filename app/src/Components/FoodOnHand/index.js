import React from "react";
import "./style.css";
//import Input from "react-materialize/lib/Input";
import Row from "react-materialize/lib/Row";
import Button from "react-materialize/lib/Button";
function FoodOnHand() {
  return (
    <div className="pp-foh">
      <Row>
        <h1>Hello David, Welcome to your Pocket Pantry!</h1>
        <h2>What ingredients do you have on-hand today?</h2>
      </Row>
      <Row>
        <ul className="pp-foh-items">
          <li><input className="pp-foh-text" type='textarea' /></li>
          <li><input className="pp-foh-text" type='textarea' /></li>
          <li><input className="pp-foh-text" type='textarea' /></li>
          <li><input className="pp-foh-text" type='textarea' /><Button waves='light' className="pp-red pp-foh-search">Search</Button><Button floating className='pp-red pp-foh-add' waves='light' icon='add' /></li>
        </ul>
      </Row>
    </div>
  )
}

export default FoodOnHand;
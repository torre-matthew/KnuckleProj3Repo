import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./Components/Header";
import './App.css';
import "./Components/Welcome";
import "./Components/FoodOnHand";
import FoodOnHand from "./Components/FoodOnHand";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="navbar-area">
          <img src={logo} className="App-logo" alt="logo" />   
        </Header>
        <div className="container">
         <FoodOnHand />
        </div>
      </div>
    );
  }
}

export default App;

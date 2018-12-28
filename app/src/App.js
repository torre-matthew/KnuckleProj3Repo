import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import './App.css';
import "./Components/Welcome";
import "./Components/Slider";
import "./Components/FoodOnHand";
import FoodOnHand from "./Components/FoodOnHand";
import Slider from "./Components/Slider";
import FoodDisplay from "./Components/FoodDisplay";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="navbar-area">
          <img src={logo} className="App-logo" alt="logo" />   
        </Header>
<<<<<<< HEAD
        <Welcome className="login-area">
        </Welcome>
=======
        <Slider />
       
         <FoodOnHand />
         <FoodDisplay />
        
>>>>>>> 319d18ff3893ea19b6d491e0970011f45307cbda
      </div>
    );
  }
}

export default App;

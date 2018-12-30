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
import FoodDetails from "./Components/FoodDetails";
<<<<<<< HEAD



=======
import SavedMeals from "./Components/SavedMeals";
>>>>>>> 6166dd333080bfbd996172ec18b2c97fb12a7a58
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="navbar-area">
          <img src={logo} className="App-logo" alt="logo" />  
          <Welcome className="welcome-area"></Welcome> 
        </Header>
        <Slider />
         <FoodOnHand />
         <FoodDisplay />
          <FoodDetails />
          <SavedMeals />
      </div>
    );
  }
}

export default App;

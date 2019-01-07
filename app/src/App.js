import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./Components/Header";
import './App.css';
import "./Components/Welcome";
import "./Components/Slider";
import "./Components/FoodOnHand";
import FoodOnHand from "./Components/FoodOnHand";
import Slider from "./Components/Slider";

import Carousel from "./Components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import FoodDisplay from "./Components/FoodDisplay";
import FoodDetails from "./Components/FoodDetails";
import SavedMeals from "./Components/SavedMeals";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="navbar-area">
          <img src={logo} className="App-logo" alt="logo" />   
        </Header>
        <Carousel />
        {/* <Slider /> */}
        <FoodOnHand />
        <FoodDisplay />
        <FoodDetails />
        <SavedMeals />
        <Footer />
      </div>
    );
  }
}

export default App;

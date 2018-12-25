import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="navbar-area">
          <img src={logo} className="App-logo" alt="logo" />    
        </Header>
        <Welcome className="login-area">
        </Welcome>
      </div>
    );
  }
}

export default App;

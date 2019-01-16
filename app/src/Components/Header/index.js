import React from "react";
import "./style.css";
import Button from "react-materialize/lib/Button";
import Icon from "react-materialize/lib/Icon";
import Modal from "react-materialize/lib/Modal";
import Welcome from "../Welcome";
import logo from "./pp_logo2.png";
import Sidenav from "../Sidenav";


var yourImage = sessionStorage.getItem("img");

function Header() {
  return (
   <div className="navbar-fixed">
    <nav className="navbar navbar-expand-sm">
      <div className="nav-wrapper container">
          <a href="#!" className="brand-logo"><img id="logo" src={logo} className="App-logo" alt="logo" /> </a>
        <ul>
            <li className="google-modal right">
            <Modal
              className="pp-sign-in"
              header='Login with your Google ID'
              bottomSheet
              trigger={<Button className="fas"><img src={yourImage} alt="" /></Button>}>
              <Welcome />
            </Modal></li>
            <li id="leftButton" className="pp-sidenav left"><Sidenav /></li>
        </ul>
          
      </div> 
          
    </nav>
      
  </div>
  );
}

export default Header;

import React from "react";
import "./style.css";
import Button from "react-materialize/lib/Button";
import Icon from "react-materialize/lib/Icon";
import Modal from "react-materialize/lib/Modal";
import Welcome from "../Welcome";
import logo from "./pp_logo2.png";
import Sidenav from "../Sidenav";
function Header() {
  return (
   <div>
    <nav className="navbar navbar-expand-sm">
      <div className="nav-wrapper container">
          <a href="#!" className="brand-logo"><img src={logo} className="App-logo" alt="logo" /> </a>
        <ul className="right hide-on-med-and-down">
            <li className="google-modal"><Modal
              className="pp-sign-in"
              header='Login with your Google ID'
              bottomSheet
              trigger={<Button><Icon>face</Icon></Button>}>
              <Welcome /><p>lorem ipsum</p>
            </Modal></li>
            <li className="pp-sidenav"><Sidenav /></li>
        </ul>
          
      </div> 
          
    </nav>
      
  </div>
  );
}

export default Header;

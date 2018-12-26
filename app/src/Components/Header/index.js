import React from "react";
import "./style.css";
import Button from "react-materialize/lib/Button";
import Icon from "react-materialize/lib/Icon";
import Modal from "react-materialize/lib/Modal";
import Welcome from "../Welcome";
import logo from "./pp_logo.png";


function Header() {
  return (
   <div>
    <nav className="navbar navbar-expand-sm">
      <div className="nav-wrapper container">
          <a href="#!" className="brand-logo"><img src={logo} className="App-logo" alt="logo" /> </a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
            <li className="google-modal"><Modal
              className="pp-sign-in"
              header='Login with your Google ID'
              bottomSheet
              trigger={<Button><Icon>face</Icon></Button>}>
              <Welcome /><p>lorem ipsum</p>
            </Modal></li>
        </ul>
      </div>
      {/* <div className="container">
        <Navbar brand="logo" right>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
          <Modal
            header='Modal Header'
            bottomSheet
            trigger={<Button><Icon>face</Icon></Button>}>
            <Welcome/><p>lorem ipsum</p>
          </Modal>
        </Navbar>
      </div> */}
        
    </nav>
    <ul className="sidenav" id="mobile-demo">

      <li><a href="mobile.html">Login</a></li>
    </ul>
    </div>
  );
}

export default Header;

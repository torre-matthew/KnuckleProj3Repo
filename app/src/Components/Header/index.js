import React from "react";
import "./style.css";
import Button from "react-materialize/lib/Button";
import Icon from "react-materialize/lib/Icon";
import Modal from "react-materialize/lib/Modal";
import Navbar from "react-materialize/lib/Navbar";
import NavItem from "react-materialize/lib/NavItem";
import Welcome from "../Welcome";



function Header() {
  return (
   
    <nav className="navbar navbar-expand-sm">
      <div className="container">
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
      </div>
        
    </nav>
    
  );
}

export default Header;
